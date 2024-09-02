export const CommentData = [
    {
        name: "Rohan",
        text: "Consectetur laborum voluptate excepteur incididunt.",
        replies: [],
    },
    {
        name: "Rohan",
        text: "Consectetur laborum voluptate excepteur incididunt.",
        replies: [
            {
                name: "Rohan",
                text: "Consectetur laborum voluptate excepteur incididunt.",
                replies: [
                    {
                        name: "Rohan",
                        text: "Consectetur laborum voluptate excepteur incididunt.",
                        replies: [
                            {
                                name: "Rohan",
                                text: "Consectetur laborum voluptate excepteur incididunt.",
                                replies: [
                                    {
                                        name: "Rohan",
                                        text: "Consectetur laborum voluptate excepteur incididunt.",
                                        replies: [
                                            {
                                                name: "Rohan",
                                                text: "Consectetur laborum voluptate excepteur incididunt.",
                                                replies: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Rohan",
        text: "Consectetur laborum voluptate excepteur incididunt.",
        replies: [
            {
                name: "Rohan",
                text: "Consectetur laborum voluptate excepteur incididunt.",
                replies: [
                    {
                        name: "Rohan",
                        text: "Consectetur laborum voluptate excepteur incididunt.",
                        replies: [],
                    },
                    {
                        name: "Rohan",
                        text: "Consectetur laborum voluptate excepteur incididunt.",
                        replies: [],
                    },
                    {
                        name: "Rohan",
                        text: "Consectetur laborum voluptate excepteur incididunt.",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name: "Rohan",
        text: "Consectetur laborum voluptate excepteur incididunt.",
        replies: [
            {
                name: "Rohan",
                text: "Consectetur laborum voluptate excepteur incididunt.",
                replies: [
                    {
                        name: "Rohan",
                        text: "Consectetur laborum voluptate excepteur incididunt.",
                        replies: [
                            {
                                name: "Rohan",
                                text: "Consectetur laborum voluptate excepteur incididunt.",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
]

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex p-2 mb-2 bg-gray-100 rounded-md'>
            <img className='w-8 h-8 mr-2' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt="user-logo" />
            <div>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment
