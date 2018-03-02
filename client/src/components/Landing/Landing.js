import React from 'react';

import classes from './Landing.css';

const Landing = () => {
  console.log('[classes]', classes.Landing)
  return (
    <div className={classes}>
      <h1>
        Postmando
      </h1>
      Collect feedback from your users
    </div>
  )
}

export default Landing;