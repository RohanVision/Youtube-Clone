import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from "../utlis/constant"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideo] = useState([])
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        // console.log(json);
        setVideo(json.items);

    }

    return (
        <div className='flex flex-wrap'>
            {videos.map((video) =>
                <Link to={"/watch?v=" + video.id}>
                    <VideoCard key={video.id} info={video} />
                </Link>
            )}

        </div>
    )
}

export default VideoContainer
