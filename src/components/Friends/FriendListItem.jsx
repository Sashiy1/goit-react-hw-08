import css from "./Friends.module.css";

const FriendListItem = ({avatar, name, isOnline}) => {

  return (
    <div className={css.friendItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={css.friendStatus}>{isOnline ? <span className={css.friendOnline}>Online</span> : <span className={css.friendOfline}>Ofline</span>}</p>
    </div>
  );
};

export default FriendListItem;
