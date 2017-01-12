import React from 'react';
import Modal from './modal'
export default React.createClass({

  getInitialState (){
    return{
      isModalOpen: false
    }
  },
  updatePostVisible (){
    this.setState({isModalOpen: true})
  },
  makeModalCloseState (){
    this.setState({isModalOpen: false})
  },
  getModalOpenState(){
    return this.state.isModalOpen
  },

  render (){
    return (
      <article className="blog">
        <div className="top">
          <h2 className="postTitle">{this.props.titleInput}</h2>
          <img className="accordion_img" src={this.props.imageUrlInput}/>
          <h2 className="userName">{this.props.userNameInput}</h2>
          <h3 className="postDate">{this.props.dateOfPost}</h3>
        </div>
        <Modal updatePostVisible={this.updatePostVisible} isModalOpen={this.getModalOpenState} closeModal={this.makeModalCloseState}postData={this.props.postData}/>
        <div className="bottom" ref="unhide">
          <div className="spurAndButtons">
            <img src="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/spurs/Schad/img/PostgameTeams/SAS.png"
            alt="spur"
            className="lilspur"/>
          <button className="clickhere_button" onClick={this.updatePostVisible}> Click here to read more... </button>
            <img src="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/spurs/Schad/img/PostgameTeams/SAS.png"
            alt="spur"
            className="lilspur"/>
          </div>
          <p className="blogText">{this.props.blogTextInput}</p>
        </div>
      </article>
    )
  }
})
