import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { YoutubeContext} from '../../useCustoms/useData'

import "./library.scss"
const Library = () => {
    const {data} = useContext(YoutubeContext);
    const {input} = useContext(YoutubeContext);

    const libraryData = data.filter((info)=>{
        if(input === ""){
            return info;
        }
        else if(info.video.title.toLowerCase().includes(input.toLowerCase())){
            return info;
        }
    })
    .map((item, index) => {
        return (
            <div className="col-md-3 col-12" key={index}>
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
      <div className='library'>
          <h1>Library</h1>
          <div className="row g-3">
              {
                  libraryData
              }
          </div>
        </div>
    )
}

export default Library