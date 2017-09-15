import React from 'react';
import InputMessage from './InputMessage.jsx';
import OutputMessages from './OutputMessages.jsx';
import './Chats.scss';

export default function Messanges() {
  return (
    <div className="chat__content">
      <div className="chat__design">
        <div className="host">
          <div className="sphere"> Im </div>
        </div>
        <OutputMessages />
        <div className="companion">
          <div className="sphere"> ava </div>
        </div>
      </div>
      <InputMessage />
    </div>
  );
}
Messanges.propTypes = {
  match: React.PropTypes.func.isRequired,
};
