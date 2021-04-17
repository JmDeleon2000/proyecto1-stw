import React from 'react'
import PropTypes from 'prop-types'




function MidArt({title, descript, auth, date, myref, bg}) {
    const now = new Date();
    return (
        <div className='mid-art-cont'>
        <div className={bg}>

   <div className='art-auth-date-cont-small'>{Math.trunc((now-date)/3600000)} hours ago by {auth}</div>

   </div>

        <div className = 'smallArt'>
    <h1>{title}</h1>
 
    <p>{descript}</p>
    
    <div className='redLink'><a href = {myref} style={{ position: 'absolute', bottom: '0px'}}>Read More</a></div>
  </div>
</div>
    )
}

MidArt.defaultProps = 
{
    date: new Date()
}

MidArt.propTypes =  
{
    title: PropTypes.string.isRequired,
    descript: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    auth: PropTypes.string.isRequired,
    myref: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired
}


export default MidArt




 