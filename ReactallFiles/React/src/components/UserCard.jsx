import React from 'react';
import photo from '../assets/photo.jpg'
import './UserCard.css'
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
     <p id='user-name'>{props.name}</p>
      <img  id='user-img' src={props.img} alt={props.name} />
      <p id='about-user' >{props.desc}</p>
    </div>
  );
}

export default UserCard;
