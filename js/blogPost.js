import React from 'react';

export default React.createClass({
  render (){
    return (
      <article className="blog">
        <div className="top">
          <h2 className="postTitle">{this.props.titleInput}</h2>
          <img className="accordion_img" src={this.props.imageUrlInput}></img>
          <h2 className="userName">{this.props.userNameInput}</h2>
          <h3 className="postDate">{this.props.dateOfPost}</h3>
        </div>
        <div className="bottom">
          <img src="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/spurs/Schad/img/PostgameTeams/SAS.png"
          alt="spur"
          className="lilspur"/>
        <button className="clickhere_button"> Click here to read more... </button>
          <img src="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/spurs/Schad/img/PostgameTeams/SAS.png"
          alt="spur"
          className="lilspur"/>
        </div>
        <p className="blogText">{this.props.blogTextInput}</p>
      </article>
    )
  }
})
