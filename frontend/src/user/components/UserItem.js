// UserItem.js

import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Link to={`/${props.id}/places`} className="user-item__link">
        <Card className="user-item__content">
          <div className="user-item__image">
            <Avatar
              image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
              alt={props.name}
            />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <p>
              {props.placeCount} {props.placeCount === 1 ? 'Post' : 'Posts'}
            </p>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default UserItem;
