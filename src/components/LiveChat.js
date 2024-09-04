import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utlis/chatSlice'
import ChatMessage from './ChatMessage'
import { generateRandomName, makeRandomMessage } from '../utlis/helper'

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // console.log("Api Polling");

            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20)
            }))
        }, 1000);
        return () => clearInterval(i);
    })
    return (
        <>
            <div className='w-full h-[600px] flex flex-col-reverse my-2 border border-black bg-slate-100 rounded overflow-y-scroll'>
                {
                    // dont use index. This is just for testing
                    chatMessages.map((c, index) => {
                        return (
                            <ChatMessage key={index} name={c.name} message={c.message} />
                        )
                    })
                }
            </div>

            <form className='w-full p-2 border border-black flex justify-between' onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                    addMessage({
                        name: "Rohan",
                        message: liveMessage,
                    })
                )
                setLiveMessage("")
            }}>
                <input className='w-full px-2 mr-2' type='text' value={liveMessage} onChange={(e) => { setLiveMessage(e.target.value) }} />
                <button className='px-4 py-2 bg-red-600 rounded-md text-white'>Submit</button>
            </form >
        </>

    )
}

export default LiveChat
