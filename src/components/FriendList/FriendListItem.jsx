import clsx from 'clsx';
import css from './FriendList.module.css';

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span
        className={clsx(css.status, isOnline ? css.online : css.offline)}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
