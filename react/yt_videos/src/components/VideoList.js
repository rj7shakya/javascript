import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) =>{
  const renderedList = videos.map( video =>{
    return <VideoItem />
// return <div>{props.videos.length}</div>
  });
  
  return(
    <div>{renderedList}</div>
  );

}

export default VideoList;