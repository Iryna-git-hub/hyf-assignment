import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { SocialMediaItem } from "./SocialMediaItem";

const socialMediaItems = [
  {
    url: "https://facebook.com",
    title: "Facebook",
    icon: "/socialmedia/facebook.svg",
  },
  {
    url: "https://instagram.com",
    title: "Instagram",
    icon: "/socialmedia/instagram.svg",
  },
  {
    url: "https://tiktok.com",
    title: "Tiktok",
    icon: "/socialmedia/tiktok.svg",
  },
  {
    url: "https://linkedin.com",
    title: "LinkedIn",
    icon: "/socialmedia/linkedin.svg",
  },
  {
    url: "https://google.com",
    title: "Google",
    icon: "/socialmedia/google.svg",
  },
];

const footerPageItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About us",
    link: "/about_us",
  },
  {
    title: "Destination",
    link: "/destination",
  },
  {
    title: "NASA collaboration",
    link: "/nasa_collaboration",
  },
];

export const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className={pathname !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul className={styles.footerList}>
          {footerPageItems.map((item) => (
            <li key={item.title}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={`${styles.footerList} ${styles.socialMediaList}`}>
          {socialMediaItems.map((item) => (
            <SocialMediaItem
              key={item.title}
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
};
