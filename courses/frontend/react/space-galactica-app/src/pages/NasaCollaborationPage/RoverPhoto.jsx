import styles from "./NasaCollaborationPage.module.css";

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <li>
      <p>Date {date}</p>
      <p>Rover {roverName}</p>
      <img
        className={styles.nasaPicOfTheDayImg}
        src={src}
        alt={`Photo taken by ${roverName} rover on ${date}`}
      />
    </li>
  );
};
