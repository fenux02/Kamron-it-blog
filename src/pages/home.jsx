import '../App.css'
import Man from '../assets/Kamron.jpg'
const Home = () => {
  return (
    <main>
    <section id="home" class="min-h-screen flex items-center justify-center pt-20 px-6 section bg-gray-900">
            <div class="container mx-auto flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-12 md:mb-0 fade-in-up">
                    <h1  id="sectiontext" class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span class="block text-[#fff]">Welcome!</span>
                        <span class="block gradient-text">I'm Kamron-dev</span>
                        <span class="block typing-effect text-[#fff]">Web & Bot Developer</span>
                    </h1>
                    <p id="sectionptext" class="text-[25px] text-gray-300 mb-8 leading-relaxed">
                        I share my knowledge and experiences through my Devionyx blog, where I post about web development, 
                        bot creation, and other tech-related topics. Follow me to stay updated with my latest projects 
                        and insights in the developer world.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://t.me/Devionyx" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg font-medium hover:scale-105 transition-transform">
                            Telagram Chanel
                        </a>
                        <a href="https://www.instagram.com/a6dullayev_dev?igsh=MWQwYWJkeDdzczB5Yw==" class="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:text-gray-900 hover:scale-105 transition-all">
                            Istagram Chanel
                        </a>
                    </div>
                </div>
                <div id="logobacgrand"  class="md:w-1/2 flex justify-center">
                    <div class="logo-container relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div id="animationSEction" class="logo-background absolute inset-0 rounded-full opacity-20 blur-xl"></div>
                        <div class="absolute inset-0 bg-gray-800 rounded-full flex items-center justify-center">
                            <div class="logo-background w-full h-full rounded-full animate-spin-slow"></div>
                        </div>
                        <div class="logo-inner absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center scale-in">
                        <i class="logo-icon fas fa-code text-6xl md:text-8xl gradient-text"><img className='rounded-[1000px] w-[365px] h-[355px]' src={Man} alt="" /></i>
                        </div>
                    </div>
                </div>
            </div>  
        </section>

    </main>
  )
}

export default Home;  
