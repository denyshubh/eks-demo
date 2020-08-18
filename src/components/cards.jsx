import React, { Component } from 'react';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card">
        < img className="card-img-top img-fluid" src="https://picsum.photos/200" alt="project pic" />
        <div className="card-body">
          <h4 className="card-title">{this.props.data.name}</h4>
          <p className="card-text">
            {this.props.data.description}
          </p>
          <p className="card-text"><a href={this.props.data.link} target="_blank"><small className="text-muted">{this.props.data.link}</small></a></p>
        </div>
      </div >
    );
  }
}

export default Cards;