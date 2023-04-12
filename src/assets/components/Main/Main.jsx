import { useContext } from 'react'
import { YoutubeContext} from '../../useCustoms/useData'
import { Link } from 'react-router-dom'
import "./main.scss"

const Main = () => {

    const {data} = useContext(YoutubeContext);

    const {input} = useContext(YoutubeContext);
 
    const mainData = data.filter((info)=>{
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
                    <div className='d-flex align-items-center video__author mt-2'>
                        <div className='video__author--avatar'>
                                <img src={item.video.thumbnails[2].url} alt="Author"/>
                        </div>
                        <div className="video__author--title me-auto">
                            <h4 className="video-title">{item.video.title}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <div className='main'>
        <div className="row g-3">
            {
                mainData
            }
        </div>
    </div>
  )
}

export default Main;