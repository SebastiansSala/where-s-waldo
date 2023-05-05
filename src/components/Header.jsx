import React from 'react'

const Header = () => {

    return(
        <header className='w-full bg-gray-900 p-1'>
            <nav className='flex justify-evenly list-none items-center'>
                <li className='text-2xl text-white'>Leaderboard</li>
                <li><img src="https://kidsactivitiesblog.com/wp-content/uploads/2020/04/waldo-at-home-logo.png" className='w-24'></img></li>
                <li className='text-2xl text-white'>Info</li>
            </nav>
        </header>
    )
}

export default Header