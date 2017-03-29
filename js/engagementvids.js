import React from 'react';

export default React.createClass({

  render () {
    return (
      <section className="video_section">
        <div className="video_player_container">
          <div className="NBA_video_full_section">
            <iframe width="853"
                    height="480"
                    src="https://www.youtube.com/v/KgsY7ggLmk4&autoplay=1&playlist=KgsY7ggLmk4"
                    frameBorder="0"
                    allowFullScreen></iframe>

          </div>
          <h2 className="game_description"> SPURS GAME HIGHLIGHTS
          </h2>
        </div>
      </section>
    )
  }
})
