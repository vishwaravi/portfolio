import React from 'react'

const Education = () => {
    return (
        <div id="edu" className="wrapper grid grid-cols-12 place-items-baseline">
            <div className='m-5 pb-5 flex flex-col col-span-10 items-start'>
                <p className='text-base lg:text-lg text-white mr-3'>Sri Shakthi Institute of Engineering and Technology, Coimbatore</p>
                <p className='text-base lg:text-lg'>B.E. Computer Science and Engineering</p>
            </div>
            <div className='justify-between'>
                <p className='text-white text-center'>2022 - 2026</p>
                <p>GGPA *7.75</p>
            </div>

            <div className='m-5 pb-5 flex flex-col col-span-10 items-start'>
                <p className='text-base lg:text-lg text-white mr-3'>Govt Higher Secondary School, Kuruvikkarambai</p>
                <p className='text-base lg:text-lg'>HSC, state board</p>
            </div>
            <div className='justify-between'>
                <p className='text-white text-center'>2022</p>
                <p>79.3%</p>
            </div>

            <div className='m-5 pb-5 flex flex-col col-span-10 items-start'>
                <p className='text-base lg:text-lg text-white mr-3'>Govt High School, Kondraikkadu</p>
                <p className='text-base lg:text-lg'>SSLC, state board</p>
            </div>
            <div className='justify-between'>
                <p className='text-white text-center'>2022</p>
                <p>88.6%</p>
            </div>
        </div >
    )
}

export default Education