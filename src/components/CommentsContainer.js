import { CommentData } from './Comment'
import CommentList from './CommentList'


const CommentsContainer = () => {
    return (
        <div className='m-4 p-2'>
            <h1 className='text-2xl font-bold'>
                Comments Section
            </h1>
            <div>
                <CommentList comments={CommentData} />
            </div>
        </div>
    )
}

export default CommentsContainer
