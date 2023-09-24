import React from 'react'
import heroImg from '../../assets/images/hero.svg'
import Countup from 'react-countup'

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* ============ hero left content ============ */}
                <div className='w-full md:basis-1/2'>
                    <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600]
                    text-[16px]'> Hello welcome</h5>
                    <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800]
                    text-[1.8rem] sm:text-[40px]'>I'm Ayim William <br/> Software Engineer</h1>
                </div>
                {/* ============ hero left end ============ */}
            </div>
        </div>
    </section>
  )
}

export default Hero