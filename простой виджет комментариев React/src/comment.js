import React from 'react';


function Comment (props) {

    return (
        <div>
            <div className="comment__name"> {props.name} </div>
            <div className="comment__text">{props.text} </div>
            <div className="comment__time"> {props.date} в {props.time} </div>
        </div>
    );
}

   
export default Comment;