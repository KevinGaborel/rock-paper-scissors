import './style.css';
import React from 'react';
import badgeRock from '../../images/icon-rock.svg';
import badgePaper from '../../images/icon-paper.svg';
import badgeScissors from '../../images/icon-scissors.svg';

function Badge({value}) {

  return (
        <React.Fragment>
          {value === 'rock' && <div id={`center-badge`}><img src={badgeRock} alt={`badge ${value}`}/></div>}
          {value === 'paper' && <div id={`center-badge`}><img src={badgePaper} alt={`badge ${value}`}/></div>}
          {value === 'scissors' && <div id={`center-badge`}><img src={badgeScissors} alt={`badge ${value}`}/></div>}
          {value === undefined && <div className={`wait-computer`}></div>}
        </React.Fragment>
  );
}

export default Badge;
