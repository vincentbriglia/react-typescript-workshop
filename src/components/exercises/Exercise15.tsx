import classnames from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';

interface IExercise15CardProps {
  userName: string;
  avatar: string;
  image: string;
  likes: number;
}

export const ImageComponent: FunctionComponent<Partial<IExercise15CardProps>> = ({ image }) => (
  <div className="image">
    <img src={image} />
  </div>
);

// TODO: revisit this
export const AvatarHeader: FunctionComponent<Partial<IExercise15CardProps>> = ({
  avatar,
  userName,
}) => (
  <div className="content">
    <img className="ui avatar image" src={avatar} /> {userName}
  </div>
);

interface ICommentSectionProps {
  likes: number;
}

export const CommentSection: FunctionComponent<ICommentSectionProps> = ({ likes }) => {
  const [hasError, setError] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(likes);
  const [hasLiked, setHasLiked] = useState(false);

  const toggleLikes = () => {
    if (hasLiked) {
      setHasLiked(false);
      setNumberOfLikes(numberOfLikes - 1);
    } else {
      setHasLiked(true);
      setNumberOfLikes(numberOfLikes + 1);
    }

    setTimeout(() => {
      // SEND {hasLiked} TO SERVER
      // oh no, error!
      setNumberOfLikes(numberOfLikes - 1);
      setError(true);
    }, 1200);
  };

  const iconClass = classnames('heart like icon', hasLiked ? 'fill' : 'outline');

  return (
    <React.Fragment>
      <div className="content">
        <span className="right floated">
          <a onClick={toggleLikes}>
            <i className={iconClass}></i>
          </a>
          {numberOfLikes} likes
        </span>
        <i className="comment icon"></i>3 comments
      </div>

      <div className="extra content">
        <div className="ui large transparent left icon input">
          <i className="heart outline icon"></i>
          <input type="text" placeholder="Add Comment..." />
        </div>
      </div>
      {!!hasError && (
        <div className="ui bottom attached warning message">
          There was an error submitting your action
        </div>
      )}
    </React.Fragment>
  );
};

export const Exercise15Card: FunctionComponent<IExercise15CardProps> = ({
  userName,
  avatar,
  image,
  likes,
}) => (
  <div className="ui card">
    <AvatarHeader avatar={avatar} userName={userName} />
    <ImageComponent image={image} />
    <CommentSection likes={likes} />
  </div>
);

export const Exercise15: FunctionComponent = () => {
  const cardProps: IExercise15CardProps = {
    avatar:
      'https://cdnb.artstation.com/p/assets/images/images/018/282/767/large/chris-rams-emmet-closeup-chris-rams.jpg?1558812610',
    image:
      'https://cdnb.artstation.com/p/assets/images/images/018/282/767/large/chris-rams-emmet-closeup-chris-rams.jpg?1558812610',
    likes: 0,
    userName: 'Emmet',
  };

  return (
    <div>
      <Exercise15Card {...cardProps}></Exercise15Card>
      <Exercise15Card {...cardProps}></Exercise15Card>
      <Exercise15Card {...cardProps}></Exercise15Card>
      <Exercise15Card {...cardProps}></Exercise15Card>
      <Exercise15Card {...cardProps}></Exercise15Card>
    </div>
  );
};
