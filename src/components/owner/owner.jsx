import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { getFirstName, getLastName, getEmail, getUserId } from '../../services/user.js';
import { addNewAvatar } from '../../services/contacts.js';
import './owner.scss';

class Owner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
    };
  }

  componentWillMount() {
    const userAuth = JSON.parse(localStorage.getItem('userData') || '{}');
    if (Object.keys(userAuth).length === 0) {
      alert('incorrect login or password');
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const imageInfo = this.state.file;
    addNewAvatar(imageInfo);
  }

  handleImageChange(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file,
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const urlAva = `https://glacial-basin-12371.herokuapp.com/${getUserId()}.jpeg`;
    return (
      <div className="mainUser">
        <div className="mainUser__info">
          <div className="mainUser__info_profile">
            <div className="mainUser__info_profile_img">
              <img src={urlAva} alt="avatar" />
            </div>
          </div>
          <section className="mainUser__info_data">
            <div>
              {getFirstName()} {getLastName()}
            </div>
            <div className="mainUser__info_data_status">
              <input placeholder="change status" />
            </div>
            <div>
              email: {getEmail()}
            </div>
            <form className="mainUser__info_data_image" onSubmit={e => this.handleSubmit(e)}>
              <input
                className="fileInput"
                type="file"
                onChange={e => this.handleImageChange(e)}
              />
              <button className="submitButton" type="submit" onClick={e => this.handleSubmit(e)}>
                Upload
              </button>
            </form>
          </section>
        </div>
        <div className="mainUser__contacts">
          <div className="mainUser__contacts_list">
            My contacts:
          </div>
          <div className="mainUser__contacts_add">
            <Link to="/find">
              <button className="mainUser__contacts_add_button">
                + new contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Owner.propTypes = {
  history: React.PropTypes.object.isRequired,
};

export default withRouter(Owner);
