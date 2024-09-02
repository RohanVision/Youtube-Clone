import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utlis/appSlice'
import { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../utlis/constant';
import { cacheResults } from '../utlis/searchSlice';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    // console.log(searchQuery);
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const searchCach = useSelector((store) => store.search)
    const dispatch = useDispatch()

    // Search Feature
    useEffect(() => {
        // make API call after every key press
        // but if the difference between 2 api calls <200ms then decline the api call
        const timer = setTimeout(() => {
            if (searchCach[searchQuery]) {
                setSuggestion(searchCach[searchQuery])
            } else {
                getSearchSuggestion();
            }
        }, 200);
        return () => {
            clearTimeout(timer)
        }

    }, [searchQuery]);

    const getSearchSuggestion = async () => {
        console.log("API Calls - " + searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json();
        setSuggestion(json[1])

        // update cache
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }


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

            <div className='col-span-10'>
                <div className='flex w-full '>
                    <input className='rounded-s-full w-1/2 border px-4 py-2' type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                    />
                    <button className='border rounded-r-full p-3'>
                        <img className='h-4' src='https://www.svgrepo.com/show/7109/search.svg' alt='search-icon' />
                    </button>
                </div>
                {showSuggestion && (
                    <div className='absolute bg-white w-[39rem] px-4 py-2 border rounded-lg'>
                        <ul className='flex w-full flex-col'>
                            {suggestion.map((s) => (<li key={s} className='hover:bg-slate-300'>
                                <img className='h-4 inline-block' src='https://www.svgrepo.com/show/7109/search.svg' alt='search-icon' /> {s}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className='col-span-1'>
                <img className='h-8' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='userIcon' />
            </div>
        </div >

    )
}

export default Head
