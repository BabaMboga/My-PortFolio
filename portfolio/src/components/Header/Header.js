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
              <p></p>
            </div>       
          </div>

        </div>
      </div>
    </header>
    
  )
}

export default Header