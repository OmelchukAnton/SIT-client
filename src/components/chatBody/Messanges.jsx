import React from 'react';
import './Chats.scss';

export default function Messanges(props) {
  return (
    <div className="chat__content">
      <div className="chat__design">
        <div className="host">
          Me
        </div>
        <div className="correspondence">
          dialog
        </div>
        <div className="companion">
          {props.match.params.userId}
        </div>
      </div>
      <div className="sedding__messages">
        <input
          className="input__message"
          type="text"
          placeholder="Write a message..."
        />
        <button className="send__message"> send </button>
      </div>
    </div>
  );
}
Messanges.propTypes = {
  match: React.PropTypes.func.isRequired,
};
