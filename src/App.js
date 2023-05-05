import React from 'react';
import './styles.css';

function WhoToFollow() {
  return (
    <div className="who-to-follow">
      <div className="follow-suggestion">
        <div className="profile">
          <div className="profile-image"></div>
          <div className="profile-info">
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-username">@johndoe</p>
          </div>
        </div>
        <button className="follow-button">Follow</button>
      </div>

      <div className="follow-suggestion">
        <div className="profile">
          <div className="profile-image"></div>
          <div className="profile-info">
            <h2 className="profile-name">Jane Smith</h2>
            <p className="profile-username">@janesmith</p>
          </div>
        </div>
        <button className="follow-button">Follow</button>
      </div>

      <div className="follow-suggestion">
        <div className="profile">
          <div className="profile-image"></div>
          <div className="profile-info">
            <h2 className="profile-name">Bob Johnson</h2>
            <p className="profile-username">@bobjohnson</p>
          </div>
        </div>
        <button className="follow-button">Follow</button>
      </div>

      <button className="show-more-button">Show More</button>
    </div>
  );
}

export default WhoToFollow;
