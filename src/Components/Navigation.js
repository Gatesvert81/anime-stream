import React from 'react'

function Navigation() {
    return (
        <nav className='fixed top-0 left-0 w-full h-fit z-30 flex justify-between py-3 px-10 text-white' >
            <div className='text-xl font-semibold uppercase ' >
                Mon
            </div>
            <div className='flex flex-col gap-5' >
                <div className='flex justify-end gap-5 items-center' >
                    <div className='flex justify-end gap-2 items-center' >
                        <div className='w-6 h-6 rounded-full bg-violet-300' />
                        <p className='font-light'>
                            <span className='font-light'> Evening: </span>
                            <span > Toshi </span>
                        </p>
                    </div>
                    <div className='w-8 h-8 bg-white rounded-lg flex flex-col justify-center items-center gap-1.5 p-2 py-1' >
                        <div className='w-full h-0.5 bg-black' />
                        <div className='w-full h-0.5 bg-black' />
                    </div>
                </div>
                <div>
                    <input type="text" placeholder='Search' className='w-full text-center bg-white/25 rounded-lg py-2 text-xs backdrop-blur-md  '/>
                </div>
            </div>
        </nav>
    )
}

export default Navigation