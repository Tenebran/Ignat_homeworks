import React from 'react';
import './Message.scss';

type MessageType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};
function Message(props: MessageType) {
  return (
    <div className="message">
      <div className="message__image-wrapper">
        <img className="message__avatar" src={props.avatar} alt="avatar" />
      </div>
      <div className="message__text-wrapper">
        <div className="message__text__login">{props.name}</div>
        <div className="message__text__message">{props.message}</div>
        <div className="message__text__time">{props.time}</div>
      </div>
    </div>
  );
}

export default Message;
