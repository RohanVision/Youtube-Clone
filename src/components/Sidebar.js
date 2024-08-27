import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    // Early return pattern
    if (!isMenuOpen) return null;
    return (
        <div className='shadow-md p-4 w-40 mr-4'>
            <ul>
                <li>🏠 Home</li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h2 className='font-bold pt-2'>Subscription</h2>
            <ul>
                <li>Music</li>
                <li>Gaming</li>
                <li>Radio</li>
                <li>Movies</li>
            </ul>
            <h2 className='font-bold pt-4'>Watch Later</h2>
            <ul>
                <li>Music</li>
                <li>Gaming</li>
                <li>Radio</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar
