import React from 'react'
import PropTypes from 'prop-types'




function SmallArt({title, auth, date, myref}) {
    const now = new Date();
    return (
        <>
        <div className = 'no-text-decor'>
        <a href = {myref}>
        <div className = 'SmallArtcont'>
 
    
    <div className='art-auth-date-cont-small'>{Math.trunc((now-date)/3600000)} hours ago by {auth}</div>
  </div>
  <h3>{title}</h3>
  </a>
  </div>
  </>
    )
}

SmallArt.defaultProps = 
{
    date: new Date()
}

SmallArt.propTypes =  
{
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    auth: PropTypes.string.isRequired,
    myref: PropTypes.string.isRequired
}


export default SmallArt