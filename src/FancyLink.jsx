import React from 'react'
import PropTypes from 'prop-types'




function FancyLink({ displayimg, myref}) {
    return (
    <a href = {myref}><div className={displayimg}  /> </a>
    )
}

FancyLink.propTypes =  
{
    displayimg: PropTypes.string.isRequired,
    myref: PropTypes.string.isRequired
}


export default FancyLink