import React from 'react';
import PostTime from './PostTime';
export default function Card(props) {
    let { likes, description, name, date, img, location } = props;
    return (
        <div className='card'>
            <div className="head">
                <div className="n-c">

                    <div className="name">
                        <strong>{ name }</strong>
                    </div>
                    <div className="city text-light">
                        { location }
                    </div>
                </div>
                <div className="options">
                    ...
                </div>
            </div>
            <div className="img">
                <img src={ img } alt={ name } />
            </div>
            <div className="icons">
                <div className="like">
                    <img src={ require('../images/logos/heart.png') } alt="likes" />
                </div>
                <div className="comment like">
                    <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/512/external-comments-social-media-ui-tanah-basah-basic-outline-tanah-basah.png"alt="comments" />
                </div>
                <div className="send">
                    <img src={ require('../images/logos/telegram.png') } alt="send" />
                </div>
                <div className="date">
                    { <PostTime date={ date } /> }
                </div>
            </div>
            <div className="likes">
                { likes } likes
            </div>
            <div className="description text-bold">
                <strong>{ description }</strong>
            </div>
        </div>
    )
}
