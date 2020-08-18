import React, { Component } from 'react';

class ProfileImage extends Component {
  render() {
    return (

      <figure className="d-flex justify-content-center h-auto">
        <div className="image_outer_container">
          <div className="green_icon"></div>
          <div className="image_inner_container">
            <img src="/images/me.jpg" alt="avatar" />
          </div>
        </div>
      </figure>
    )
  }
}

export default ProfileImage;
