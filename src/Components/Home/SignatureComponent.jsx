import React from 'react'

const SignatureComponent = () => {
  return (
    <div className='bg_img py-[40px]'>
        <div className="container mx-auto px-[16px]">
            <div className="max-w-full md:max-w-[575px] w-full relative" style={{ padding:'36px 0px 36px 40px',background:'linear-gradient(330.24deg,#ff6c00 11.99%,#e52c43 88.79%)' }}>

                <h1 className='text-[44px] leading-[48px] text-white uppercase font-bold'>I'm more than</h1>
                <h1 className='text-[44px] leading-[48px] text-white uppercase font-bold'>A CHAUFFEUR,</h1>
                <h3 className='text-[24px] mt-2 leading-[30px] text-white uppercase font-bold'>
                I'M YOUR SAFE SPACE <br /> ON WHEELS. 
                </h3>
                <img src="/assets/images/Ben_T.svg" className='max-w-[232px] absolute md:right-[-54px] md:bottom-[13px]' alt="" />
                <p className='text-[14px]   leading-[30px] text-white uppercase font-bold absolute md:right-[-25px] md:bottom-[-30px]'>
                BLACKLANE CHAUFFEUR
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignatureComponent