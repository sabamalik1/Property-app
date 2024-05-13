import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.svg'

function Header() {
  return (
    <header className='py-6 mb-12 border-b '>
        <div className='container mx-auto flex justify-between items-center '>
            <Link to='/' >
                <img src={Logo} />
            </Link>

            {/* buttons.... */}
            <div className='flex items-center gap-6 '>
                <Link className='hover:text-violet-900 transition ' to='' >Log in</Link>
                <Link className=' bg-violet-600 hover:bg-violet-800 px-4 py-4 rounded-lg text-white transition ' to='/signUp' >Sign Up</Link>
            </div>
        </div>
    </header>
  )
}

export default Header