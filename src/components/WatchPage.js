import React, { useEffect } from 'react'
import { closeMenu } from '../utlis/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("v"));


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])
    return (
        <div className='flex flex-col w-full overflow-hidden p-2'>
            <div className='flex w-full'>
                <div className='p-2 w-4/5'>
                    <iframe width="100%" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='w-1/4'>
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>

    )
}

export default WatchPage
