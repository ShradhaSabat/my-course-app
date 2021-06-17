import React, {useState} from 'react';
import {AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike} from 'react-icons/ai';

const Footer = () => {

    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);


    return (<div>
        <p className="text-center">
            Do you like our courses?
            {
                like == true ? <AiFillLike onClick={(e) => {
                    setLike(false)
                }}/> : <AiOutlineLike onClick={(e) => {
                    setLike(true); setDislike(false);
                }}/>

            }
            {
                dislike == true ? <AiFillDislike onClick={(e) => {
                    setDislike(false)
                }}/> : <AiOutlineDislike onClick={(e) => {
                    setDislike(true); setLike(false);
                }}/>
            }
        </p>
    </div>);
}

export default Footer;