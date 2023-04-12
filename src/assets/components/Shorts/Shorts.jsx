import React, { useState } from 'react'
import { useContext } from 'react'
import { YoutubeContext} from '../../useCustoms/useData'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from 'react-icons/ai';
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import "./shorts.scss"

const Shorts = () => {

    const {data} = useContext(YoutubeContext);
    const {input} = useContext(YoutubeContext);

    const shortsData = data.filter((info)=>{
        if(input === ""){
            return info;
        }
        else if(info.video.title.toLowerCase().includes(input.toLowerCase())){
            return info;
        }
    }).slice(20,40).map((short, index) => {
        return (
                <div className='short position-relative' key={index}>
                    <iframe 
                        style={{width: "100%", height: "78vh"}}
                        src={`https://www.youtube.com/embed/${short.video.videoId}`}
                        title={short.video.title} 
                        className="rounded short__video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                    </iframe>
                    <div className='d-flex flex-column position-absolute short__social'>
                        <AiFillLike />
                        <AiFillDislike />
                        <BsThreeDots/>
                        <FaShare/>
                        <img src={short.video.thumbnails[0].url} alt="Author" style={{width: "50px", height: "50px"}} className="rounded"/>
                    </div>
                </div>
        )
    })
  return (
    <div className='shorts'>
        <div className='d-flex flex-column justify-content-center align-items-center gap-5 w-100'>
            {
                shortsData
            }
        </div>
    </div>
  )
}

export default Shorts