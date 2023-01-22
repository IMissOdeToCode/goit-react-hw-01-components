import PropTypes from 'prop-types';

import css from './FriendsList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
