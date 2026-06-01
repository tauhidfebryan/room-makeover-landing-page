import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center py-4 px-6 bg-secondary'>
                <h3 className='font-bold text-2xl text-dark'>LOGO</h3>

                <div className='flex md:flex-1 md:justify-center items-center gap-6'>
                    <a href='' className='text-dark hover:text-accent transition-all'>Product</a>
                    <a href='' className='text-dark hover:text-accent transition-all'>Pricing</a>
                    <a href='' className='text-dark hover:text-accent transition-all'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar