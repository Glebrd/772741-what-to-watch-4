import * as React from "react";
import withProgress from "../../hocs/with-progress/with-progress";

const PlayerControls = (props) => {
  const {progressValue, remainingTime} = props;
  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" max="100"></progress>
        <div style={{left: `${progressValue}%`}} className="player__toggler">Toggler</div>
      </div>
      <div className="player__time-value">{remainingTime}</div>
    </div>
  );
};

// PlayerControls.propTypes = {
//   progressValue: PropTypes.number,
//   remainingTime: PropTypes.string,
// };

export {PlayerControls};
export default withProgress(PlayerControls);
