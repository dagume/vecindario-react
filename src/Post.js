import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Post = forwardRef(
  ({ name, content, owner_email, comment_counter, like_counter, dislike_counter, createdAt }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {name}{" "}
                <span className="post__headerSpecial">
                  {createdAt}  @{owner_email}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{content}</p>
            </div>
          </div>
          <div className="post__footer">
            <div className="footerOptions">
              <ThumbUpIcon fontSize="small" />
              <h4>{like_counter}</h4>
            </div>
            <div className="footerOptions">
              <ThumbDownIcon fontSize="small" />
              <h4>{dislike_counter}</h4>
            </div>
            <div className="footerOptions">
              <ChatBubbleOutlineIcon fontSize="small" />
              <h4>{comment_counter}</h4>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
);

export default Post;