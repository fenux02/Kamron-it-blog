import Telegram from '../assets/telegram.png'
import Chanel from '../assets/chanal.png'
import GitHUb from '../assets/gitt.png'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 py-12 px-6 ">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 fade-in-up">
                    <a href="#home" className="flex items-center space-x-2 transition-transform hover:scale-105">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        
                        </div>
                        <span className="text-lg font-bold gradient-text">Kamron IT Blog</span>
                    </a>
                </div>
                
                
                <div className="flex space-x-4">
                    <a href="https://t.me/Devionyx" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <i className="fab fa-telegram"><img src={Telegram} width={30} alt="" /></i>
                    </a>
                    <a href="https://x.com/Devionyx" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                        <i className="fab fa-twitter"><img src={Chanel} alt="" width={30} /></i>
                    </a>
                    <a href="https://github.com/Devionyx" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                        <i className="fab fa-github"><img src={GitHUb} width={20} alt="" /></i>
                    </a>
                </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 fade-in-up">
                <p>Site created by Abdullayev Kamron (Kamron IT Blog) © 2025. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </>
  )
};

export default Footer;
