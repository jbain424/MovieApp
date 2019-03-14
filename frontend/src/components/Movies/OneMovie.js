import React from "react";
import { Link } from "react-router-dom";

import "../../css/OneMovie.css";

class OneMovie extends React.Component {
  componentDidMount() {
    this.props.getOneMovie(this.props.match.params.id);
    this.props.getComments(this.props.match.params.id);
  }

  render() {
    const { oneMovie, comments } = this.props;

    const getComments = comments.map(text => {
      return (
        <>
          <div>
            <li>{text.comment}</li>
          </div>
        </>
      );
    });

    return (
      <>
        <div className="onePage">
          <div className="movieTitle">{oneMovie.title}</div>

        <div className="viewerComments">Viewer Comments</div>
          <div className="comments">{getComments}</div>
          <div className="movieImg">
            <img src={oneMovie.img_url} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default OneMovie;
