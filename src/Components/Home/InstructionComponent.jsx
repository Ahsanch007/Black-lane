import React from 'react'

export const InstructionComponent = () => {
    const data = [
        {
            id: 1,
            img: '/assets/images/shield-check.svg',
            name: 'Safety first',
            descrip: 'Travel confidently knowing your safety is our #1 priority. Rigorous health and cleaning standards round out a best-in-class service.'
        },
        {
            id: 1,
            img: '/assets/images/car.svg',
            name: 'Private travel solutions',
            descrip: 'Discover your one-stop travel shop: long-distance rides, one way or return, by the hour, airport transfers, and more.'
        },
        {
            id: 1,
            img: '/assets/images/leaf.svg',
            name: 'Sustainable travel',
            descrip: 'Breathe easy knowing all ride emissions are offset, as part of our global carbon offset program — the industry’s first.'
        },
    ]
    return (
        <div className='py-[40px] bg-[#fff]'>
            <div className="container mx-auto px-[16px]">
                <div className="grid grid-cols-12">
                    {
                        data.map((item) =>

                            <div className="col-span-12 md:col-span-4 px-[40px]">
                                <div className="text-center">
                                    <div className="flex flex-col items-center gap-4">
                                        <img src={item.img} alt="" />
                                        <h2 className='text-[#181a1f] font-bold text-[24px]'>
                                            {item.name}
                                        </h2>
                                        <p className='text-[#181a1f] font-normal text-[14px] max-w-[300px]'>
                                            {item.descrip}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
