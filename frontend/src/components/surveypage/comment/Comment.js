
import React from "react";
// Html for the comment
const Comment = (props) => {

    const commentHandler = (event)=>{

        let comment = event.target.value;
        if(comment.length>0)
        {
            
            props.changecomment(comment);
        }
    }

    return (
        <React.Fragment>
            <div className={props.group}>
                <p>Any comments or suggestions?</p>
                <textarea onBlur={commentHandler} id="comments" className={props.text} name="comment" placeholder="Enter your comment here..."></textarea>
            </div>
        </React.Fragment>
    )
}

export default Comment;