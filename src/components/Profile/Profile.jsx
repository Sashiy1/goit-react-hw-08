// import clsx from "clsx
import css from "./ProfileStyles.module.css";

const Profile = ({ name, tag, location, image, stats}) => {
  

  return (
 
    <div className={css.profileCard}>
      <div>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span>Followers</span>
          <span className={css.profileCaption}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span>Views</span>
          <span className={css.profileCaption}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span>Likes</span>
          <span className={css.profileCaption}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
