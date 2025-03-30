import React from "react";
import './UserCard.css';

function UserCard({ name, age }) {
    return (
        <div className="user-card">
            <h2 className="user-name">{name}</h2>
            <p className="user-age">Idade: {age}</p>
        </div>
    );
}

export default UserCard;