import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class OneMovie extends React.Component {
  render(props) {
    return (
      <div>
        {props.img_url}
        {props.title}
      </div>
    );
  }
}

export default OneMovie;
