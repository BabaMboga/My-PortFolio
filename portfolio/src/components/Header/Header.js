import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[80px] flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* ============== logo ============== */}
          <div className='flex items-center gap-[10px]'>
            <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]
            rounded-full flex items-center justify-center'>
              AW
            </span>     

            <div className='leading-[20px]'>
              <h2 className='text-xl text-smallTextColor font-[700]'>Ayim William</h2>
              <p className='text-smallTextColor text-[14px] font-[500]'>
                Personal
              </p>
            </div> 
          </div>
          {/* =========== logo end ===========  */}
          {/* =========== menu start ===========  */}
          <div className='menu'>
            <ul className='flex items-center gap-10'>
              <li><a className="text-smallTextColor font-[600]" href="#about">About</a></li>
              <li><a className="text-smallTextColor font-[600]" href="#services">Services</a></li>
              <li><a className="text-smallTextColor font-[600]" href="#portfolio">Portfolio</a></li>
              <li><a className="text-smallTextColor font-[600]" href="#contact">Contact</a></li>
            </ul>
          </div>
          {/* =========== menu end ===========  */}

        </div>
      </div>
    </header>
    
  )
}

export default Header