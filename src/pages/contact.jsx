import React from 'react'
import Telegram from '../assets/telegram.png'
import Email from '../assets/email-icon.png'
import Phone from '../assets/phone-tel.png'
// 

const Contact = () => {
  return (
    <main>

      <section id="contact" class="py-20 px-6 section h-[1100px] bg-gray-900">
        <div class="container mx-auto ">
          <h2 class="text-3xl md:text-[50px] font-bold mb-12  pt-[120px] text-center gradient-text fade-in-up">
            Get In Touch
          </h2>

          <div class="max-w-[3000px]  mx-auto bg-gray-800 rounded-xl p-8 md:p-10 fade-in-up">
            <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
              <div class="md:w-1/2">
                <h3 class="text-[30px] font-bold  mb-4 text-gray-500">Contact Information</h3>
                <div class="space-y-4">
                  <div id='flex-div' class="flex items-start fade-in-up" >
                    <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <i class="fab fa-telegram"><img src={Telegram} alt="" width={"25"} /></i>
                    </div>
                    <div>
                      <p class="text-gray-400">Telegram</p>
                      <a href="https://t.me/Devionyx" class="text-blue-400 hover:underline">@Devionyx</a>
                    </div>
                  </div>

                  <div id='flex-div-div' class="flex items-start fade-in-up" >
                    <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <i class="fas fa-envelope"><img src={Email} alt="" width={"25"} /></i>
                    </div>
                    <div>
                      <p class="text-gray-400">Email</p>
                      <a href="mailto:abdullayevkamron755@gmail.com" class="text-green-400 hover:underline">abdullayevkamron755@gmail.com</a>
                    </div>
                  </div>

                  <div id='flex-div-div-div' class="flex items-start fade-in-up" >
                    <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <i class="fas fa-phone"><img src={Phone} width={"25"} alt="" /></i>
                    </div>
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <a href="tel:+998910917725" className="text-purple-400 hover:underline">+998 91 091 77 25</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <h3 className="text-xl text-gray-500 font-bold mb-4">Send a Message</h3>
                <form id="contact-form" class="space-y-4">
                  <div>
                    <label for="name" className='block text-gray-400 mb-2'>Name</label>
                    <input type="text" className='w-full bg-gray-700 border text-gray-300 border-gray-600 rounded-lg px-4 py-2 input-focus' id="name" required />
                  </div>
                  <div>
                    <label for="email" className='block text-gray-400 mb-2'>Email</label>
                    <input type="email" className='w-full bg-gray-700 border border-gray-600 text-gray-300 rounded-lg px-4 input-focus' id="email" required />
                  </div>


                  <div>
                    <label for="message" class="block text-gray-400 mb-2">Message</label>
                    <textarea id="message" rows="4" className="w-full bg-gray-700 border border-gray-600 text-gray-300 rounded-lg px-4 py-2 input-focus" required></textarea>
                  </div>

                  <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg font-medium hover:scale-105 transition-transform">
                    Send Message
                  </button>
                </form>
                <p id="form-message" className="mt-4 text-center text-gray-400 hidden"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main >

  )
}

export default Contact