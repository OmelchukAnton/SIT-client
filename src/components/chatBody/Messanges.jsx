import React from 'react';
import InputMessage from './InputMessage.jsx';
import OutputMessages from './OutputMessages.jsx';
import './Chats.scss';

export default function Messanges(props) {
  return (
    <div className="chat__content">
      <div className="chat__design">
        <div className="host">
          Me
        </div>
        <OutputMessages />
        <div className="companion">
          {props.match.params.userId}
        </div>
      </div>
      <InputMessage />
    </div>
  );
}
Messanges.propTypes = {
  match: React.PropTypes.func.isRequired,
};
