import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex my-2 px-2 items-center'>
            <img className='h-8 mr-2' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='userIcon' />
            <span className='mr-2 font-bold'>{name}</span>
            <span className='mr-2'> {message}</span>
        </div>
    )
}

export default ChatMessage
