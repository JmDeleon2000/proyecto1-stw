import React from 'react'
import PropTypes from 'prop-types'




function BigArt({title, descript, auth, date, myref}) {
    const now = new Date();
    return (
        <div className = 'bigArt'>
 
    <h1>{title}</h1>
    <div className='art-auth-date-cont'>{Math.trunc((now-date)/3600000)} hours ago by {auth}</div>
    <p>{descript}</p>
    
    <div><a href = {myref}>Read More</a></div>
  </div>
    )
}

BigArt.defaultProps = 
{
    date: new Date()
}

BigArt.propTypes =  
{
    title: PropTypes.string.isRequired,
    descript: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    auth: PropTypes.string.isRequired,
    myref: PropTypes.string.isRequired
}


export default BigArt




 