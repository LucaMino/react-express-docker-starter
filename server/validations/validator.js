import { validationResult } from 'express-validator';

export const validate = (req, res, next) => {
    // get errors
    const errors = validationResult(req)
    // if no errors, continue to next middleware
    if(errors.isEmpty()) {
        return next();
    }

    const extractedErrors = []

    errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    })
  }