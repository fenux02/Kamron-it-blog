import React from 'react'
import TelegramBot from '../assets/telegram.png'

import TgChanel from '../assets/chanal.png'
import Book from '../assets/book.png'
import Work from '../assets/work.png'



const Projects = () => {
  return (
<main>
<section id="projects" className="py-20 px-6 h-[1100px] *:                 bg-gray-800 section ">
            <div className="container  mx-auto ">
              <h2  className='text-3x1 md:text-4xl font-bold mb-12 text-center gradient-text fade-in-up'>
                My Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Projeckt-1  */}
                <div className='bg-gray-700 rounded-xl p-6 card-hover fade-in-up ' >
                  {/* style ba shoda
                  animation-delay:0.1;
                  */}
                  <div  className='w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4'>
                    <i className='fas fa-rood text-xl'><img src={TelegramBot} alt="" width={35} /></i>
                  </div>
                  <h3 className='text-xl font-bold mg-2 '>Telegram Taom Bot</h3>
                  <p className='text-gray-300 mb-4'>
                    A Telegram Bot that helps users discover and order food frokm local restaurants with delivery options .
                  </p>
                  <a href="#!" className='inline-block px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors'  >
                    View Project 
                  </a>
                </div>
                {/* projeckt - 2  */}
                <div className='bg-gray-700 rounded-xl p-6 card-hover fade-in-up'>
                  {/* style ba shoda 
                  animation-delay 0.2s;
                  */}
                  <div className='w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4'>
                    <i className='fas fa-briefcase text-xl '><img src={Work} width={35} alt="" /></i>
                    
                  </div>
                  <h3 className='text-xl font-bold mb-2 '>Ishchi Loyiha Website</h3>
                  <p className='text-gray-300 mb-4'>
                    A professional website for job seekers and employers to connecy and find the best opportuniies.
                  </p>
                  <a href="https://ustabot.netlify.app/"  className='inline-block px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-colors'>
                  VIEW Project
                   </a>
                </div>
                {/* projeckt -3  */}
                <div className='bg-gray-700 rounded-xl p-6 card-hover fade-in-up '>
                  {/* style ba ad beda
                  animatiopn-delay :0.3;
                  

                  */}
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                            <i class="fas fa-book text-xl"><img src={Book} alt="" width={36} /></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Kitobiy Website</h3>
                        <p class="text-gray-300 mb-4">
                            An online bookstore with a wide selection of books, user reviews, and personalized recommendations.
                        </p>
                        <a href="https://kitobiy-uz.netlify.app/" className="inline-block px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors">
                            View Project
                        </a>
                </div>
                {/* telegram chanel */}
                <div className='bg-gray-700 rounded-xl p-6 card-hover w-[1060px] md:col-span-2 lg:col-span-1 fade-in-up'>
                <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4">
                            <i class="fab fa-telegram text-xl"><img src={TgChanel} width={36} alt="" /></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Devionyx Channel</h3>
                        <p className="text-gray-300 mb-4">
                            Follow my Devionyx channel to read my blog posts and stay updated with my latest projects and tech insights.
                        </p>
                        <a href="https://t.me/Devionyx" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg hover:opacity-90 transition-opacity">
                            Join Channel
                        </a>
                </div>
              </div>
            </div>
        </section>
       

</main>
  )
}

export default Projects