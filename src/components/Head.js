import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utlis/appSlice'

const Head = () => {

    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col gap-y-24 p-4 shadow-md items-center' >
            <div className='flex col-span-1'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className='h-6 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" alt='hamburger-icon' />
                <img className='h-6 mx-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s' alt='Youtube-Logo' />
            </div>

            <div className='col-span-10 flex justify-center items-center'>
                <input className='rounded-s-full w-1/3 border px-4 py-2' type='text' />
                <button className='border rounded-r-full p-3'>
                    <img className='h-4' src='https://www.svgrepo.com/show/7109/search.svg' alt='search-icon' />
                </button>
            </div>

            <div className='col-span-1'>
                <img className='h-8' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='userIcon' />
            </div>
        </div >

    )
}

export default Head
