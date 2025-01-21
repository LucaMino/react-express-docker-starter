import { Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow'>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App