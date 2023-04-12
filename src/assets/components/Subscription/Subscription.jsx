import React from 'react'
import { useContext } from 'react'
import { YoutubeContext} from '../../useCustoms/useData'
import { Link } from 'react-router-dom'

import "./subscription.scss"

const Subscription = () => {

    const {data} = useContext(YoutubeContext);
    const {input} = useContext(YoutubeContext);

    const subscriptionData = data.filter((info)=>{
        if(input === ""){
            return info;
        }
        else if(info.video.title.toLowerCase().includes(input.toLowerCase())){
            return info;
        }
    })
    .map((item, index) => {
        return (
            <div className="col-md-4 col-12" key={index}>
                <div className="video">
                    <div className="video__body">
                        <Link to={`/${item.video.title}`}><img src={item.video.thumbnails[0].url} alt="Photo" style={{width: "100%"}} className="rounded"/></Link>
                    </div>
                    <div className='d-flex video__author mt-2 w-100'>
                        <div className="video__author--title w-100">
                            <h4 className="video-title">{item.video.author.title}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <div className='subscription'>
        <h1>Subscription</h1>
        <div className="row g-3">
            {
                subscriptionData
            }
        </div>
    </div>
  )
}

export default Subscription