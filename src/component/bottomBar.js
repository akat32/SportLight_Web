import React, { Component } from 'react';
import '../style/bottomBar.css';

class BottomBar extends Component {
  render() {
    return (
      <div className="bottomBar">
        <div className = "bar">
            <div className = "timeLine">
                <div className = "timeLineIcon"></div>
            </div>
            <div className = "myPage">
                <div className = "pageIcon"></div>
            </div>
            {/* fab넣을거임 */}
            <div className = "setting">
                <div className = "settingIcon"></div>
            </div>
            <div className = "notification">
                <div className = "notifiIcon"></div>
            </div>
            
            <div className = "setting">
                <div className = "settingIcon"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default BottomBar;
