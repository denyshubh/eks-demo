import React, { Component } from 'react';
import ProfileImage from './profileImage';

class ResumeLeft extends Component {

  hr = () => {
    return <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
  }

  render() {
    return (
      <section>
        <figure>
          <ProfileImage />
        </figure>
        <article>
          <h2 className="py-3 name">{this.props.data.name}</h2>
          <h4 className="text-info">About</h4>
          {this.hr()}
          <article>
            <blockquote className="text-sm-left text-justify text-muted blockquote">
              {this.props.data.about_blockQuote}
              <br />
              <footer className="blockquote-footer">
                {this.props.data.about_bQ_footer}
              </footer>
            </blockquote>
          </article>
          {this.hr()}
          <h5 className="text-info">Address</h5>
          <p>{this.props.data.address}</p>
          <h5 className="text-info">Phone</h5>
          <p>{this.props.data.phone}</p>
          <h5 className="text-info">Email</h5>
          <p>{this.props.data.email}</p>
          <h5 className="text-info">Website</h5>
          <p>{this.props.data.web}</p>
          {this.hr()}
        </article>
      </section>
    );
  }
}

export default ResumeLeft;