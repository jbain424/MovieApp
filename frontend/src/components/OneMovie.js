import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class OneMovie extends React.Component {
  render() {
    const Movie = this.props;
    return (
      <div>
        {this.props.img_url}
        {this.props.title}
      </div>
    );
  }
}

export default OneMovie;
