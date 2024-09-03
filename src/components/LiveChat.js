import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utlis/chatSlice'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            console.log("Api Polling");

            dispatch(addMessage({
                name: "Rohan",
                message: "Aute eu officia anim ut enim nostrud.,"
            }))
        }, 2000);
        return () => clearInterval(i);
    })
    return (
        <div className='w-full h-[600px] flex flex-col-reverse my-2 border border-black bg-slate-300 rounded overflow-y-scroll'>
            {
                // dont use index. This is just for testing
                chatMessages.map((c, index) => {
                    return (
                        <ChatMessage key={index} name={c.name} message={c.message} />
                    )
                })
            }
        </div>
    )
}

export default LiveChat
