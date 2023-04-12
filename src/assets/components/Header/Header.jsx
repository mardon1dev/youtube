import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai"
import { MdKeyboardVoice } from "react-icons/md"
import { BiVideoPlus } from "react-icons/bi";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdNotificationsOutline } from "react-icons/io";

import "./header.scss"
import { useContext } from "react";
import { YoutubeContext } from "../../useCustoms/useData";
 
const Header = () => {

    const {burger, setBurger} = useContext(YoutubeContext);
    const {input, setInput} = useContext(YoutubeContext)
    const handleClick = () => {
        setBurger(!burger)
    }

  return (
    <div className="header">
        <div className="container">
            <div className="header__main">
                <div className="header__main--youtube">
                    <GiHamburgerMenu onClick={handleClick} className="d-sm-block d-none"/>
                    <AiFillYoutube/>
                    <span>Youtube</span>
                </div>
                <form className="header__main--search">
                    <input type="text" name="" id="" placeholder="Search" onChange={(e)=>setInput(e.target.value)}/>
                    <AiOutlineSearch className="input--search"/>
                    <MdKeyboardVoice className="input--voice d-md-block d-none"/> 
                </form>   
                <div className="header__main--profile">
                    <BiVideoPlus className="videoplus d-sm-block d-none"/>
                    <IoMdNotificationsOutline className="notifications d-sm-block d-none"/>
                    <div className="profile">
                        M
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;