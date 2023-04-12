import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { YoutubeContext } from '../useCustoms/useData';

import "./functions.scss"

const Functions = () => {

  const {data} = useContext(YoutubeContext)
  const {title} = useParams();
  console.log(title);
  console.log(data);


  return (
    <div className='functions'>
      <div className='functions__video'>
        {
          data.filter((info)=>info.video.title === title).map((item, index) => {
            console.log(item);
            return(
              <div key={index} className="functions__vidoe--one">
                <iframe 
                  width="100%" 
                  height="500px" 
                  src={`https://www.youtube.com/embed/${item.video.videoId}`} 
                  title={item.video.title} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                </iframe>
                <h2 className='fs-3'>{item.video.title}</h2>
                <div className='d-flex align-items-center video__author mt-2'>
                        <div className='video__author--avatar'>
                                <img src={item.video.thumbnails[2].url} alt="Author"/>
                        </div>
                        <div className="video__author--title me-auto">
                            <h4 className="video-title">{item.video.title}</h4>
                        </div>
                    </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Functions;