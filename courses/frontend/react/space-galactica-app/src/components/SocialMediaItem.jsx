import styles from "./Footer.module.css";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a className={styles.socialMediaLink} href={url}>
        <img className={styles.socialMediaIcon} src={icon} alt={title} />
      </a>
    </li>
  );
};
