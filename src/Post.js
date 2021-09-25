import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link } from 'react-router-dom';


const Post = forwardRef(
  ({ id, name, content, owner_email, comment_counter, like_counter, dislike_counter, createdAt }, ref) => {
    
  const [likeCounterState, setLikeCounterstate] = React.useState(like_counter);
  const [dislikeCounterState, setDislikeCounterstate] = React.useState(dislike_counter);

  const [showLikeButton, setShowLikeButton] = React.useState(true)
  const [showDislikeButton, setshowDislikeButton] = React.useState(true)


  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  };

  const addLike = () => {
    setLikeCounterstate(prevState =>  prevState + 1)
    setShowLikeButton(false)
  fetch('https://dry-dusk-90160.herokuapp.com/api/post/add-like', requestOptions)
    .then(response => response.json())
  }

  const removeLike = () => {
    setLikeCounterstate(prevState =>  prevState - 1)
    setShowLikeButton(true)
  fetch('https://dry-dusk-90160.herokuapp.com/api/post/remove-like', requestOptions)
    .then(response => response.json())
  }

  const addDislike = () => {
    setDislikeCounterstate(prevState =>  prevState + 1)
    setshowDislikeButton(false)
  fetch('https://dry-dusk-90160.herokuapp.com/api/post/add-dislike', requestOptions)
    .then(response => response.json())
  }

  const removeDislike = () => {
    setDislikeCounterstate(prevState =>  prevState - 1)
    setshowDislikeButton(true)
  fetch('https://dry-dusk-90160.herokuapp.com/api/post/remove-dislike', requestOptions)
    .then(response => response.json())
  }

  return (
    <div className="post">
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
            {/* <Button onClick=""> */}
              <ThumbUpIcon onClick={showLikeButton ? addLike : removeLike} fontSize="small" />
            {/* </Button> */}
            <h4>{likeCounterState}</h4>
          </div>
          <div className="footerOptions">
            <ThumbDownIcon onClick={showDislikeButton ? addDislike : removeDislike} fontSize="small" />
            <h4>{dislikeCounterState}</h4>
          </div>
          {/* Como enviar el id del post al que le vamos a generar un comentario */}
          <Link to="/comment" className="link_opcion">
            <div className="footerOptions">
              <ChatBubbleOutlineIcon fontSize="small" />
              <h4>{comment_counter}</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Post;