import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#12141e] pt-12'>
      {/* ===================== footer top ===================== */}
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Do you want to make beautiful products?
            </h2>
            <a href='#contact'>
              <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
              hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i class="ri-mail-send-fill"></i>Hire Me
              </button>
            </a>
          </div>

          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, uis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            </p>
            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-[15px]'>
                Follow Me:
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
               text-center'>
                <a href='#github' className='text-gray-300 font-[500] text-[18px]'>
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
               text-center'>
                <a href='#twitter' className='text-gray-300 font-[500] text-[18px]'>
                <i class="ri-twitter-x-fill"></i>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
               text-center'>
                <a href='#linkedin' className='text-gray-300 font-[500] text-[18px]'>
                <i class="ri-linkedin-box-line"></i>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
               text-center'>
                <a href='#facebook' className='text-gray-300 font-[500] text-[18px]'>
                <i class="ri-facebook-box-line"></i>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
               text-center'>
                <a href='#wordpress' className='text-gray-300 font-[500] text-[18px]'>
                <i class="ri-wordpress-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
            <ul className='flex items-center gap-10'>
              <li><a className="text-gray-400 font-[600]" href="#about">About</a></li>
              <li><a className="text-gray-400 font-[600]" href="#services">Services</a></li>
              <li><a className="text-gray-400 font-[600]" href="#portfolio">Portfolio</a></li>
              <li><a className="text-gray-400 font-[600]" href="#contact">Contact</a></li>
            </ul>
          </div>

      </div>
      {/* ===================== footer top end ===================== */}
    </footer>
  )
}

export default Footer