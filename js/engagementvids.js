import React from 'react';

export default React.createClass({

  render () {
    return (
      <section className="video_section">
        <div className="video_player_container">
          <div className="NBA_video_full_section">
            <iframe width="853"
                    height="480"
                    src="//www.youtube.com/v/lG5aSZBAuPs&autoplay=1&loop=1&playlist=lG5aSZBAuPs"
                    frameborder="0"
                    allowfullscreen></iframe>

          </div>
          <h2 className="game_description"> SPURS GAME HIGHLIGHTS
          </h2>
        </div>
      </section>
    )
  }
})
