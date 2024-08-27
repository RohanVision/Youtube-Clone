import React from 'react'
import Button from './Button'


const btnList = ['All', 'Movies', 'Cricket', 'Music', 'Anime']

const ButtonList = () => {
    return (
        <div className='flex'>
            {
                btnList.map((btnName) => {
                    return <Button key={btnName} name={btnName} />
                })
            }
        </div>
    )
}

export default ButtonList
