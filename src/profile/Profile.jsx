import React from 'react'
import PropTypes from "prop-types";

const Profile = props => {
    const styler = {color: 'black', fontFamily:'Montserrat'}
    const btnStyle = {color: 'white', backgroundColor:'#0763e5', borderRadius:'2em', border:'transparent', padding:'.75em 1.25em', marginTop:'1.5rem', fontSize:'1em', cursor: 'pointer'}
    const spanStyle = {opacity: '75%', fontSize:'.75em'}
    
    return (
        <div className="profile" style={styler}>
            {props.children}
            <h1 className="name">{props.fullName}</h1>
            <p className="bio">{props.bio}</p>
            <span className="pro" style={spanStyle}>{props.profession}</span>
            <button className="btn" onClick={() => props.alertName(props.fullName)} style={btnStyle} >Click to Alert !</button>
        </div>
    )
}
Profile.propTypes = {
    version: "16",
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}
export default Profile