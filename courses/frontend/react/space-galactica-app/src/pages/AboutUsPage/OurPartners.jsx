import styles from "./OurPartners.module.css";

export const OurPartners = () => {
  return (
    <>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <ul className={styles.partnersList}>
        <li className={styles.partnersListItem}>
          <img src="../../public/business_partners/CBC_Logo_White.png" alt="CBC logo" />
        </li>
        <li className={styles.partnersListItem}>
          <img src="../../public/business_partners/Microsoft-Logo-white.png" alt="Microsoft logo" />
        </li>
        <li className={styles.partnersListItem}>
          <img src="../../public/business_partners/QueensLogo_white.png" alt="Queens logo" />
        </li>
        <li className={styles.partnersListItem}>
          <img src="../../public/business_partners/alphabet-logo.png" alt="Alphabet logo" />
        </li>
        <li className={styles.partnersListItem}>
          <img src="../../public/business_partners/amazon_logo.png" alt="Amazon logo" />
        </li>
        <li className={styles.partnersListItem}>
          <img src="../../public/business_partners/nyu-logo.png" alt="NYU logo" />
        </li>
        <li className={styles.partnersListItem}>
          <img src="../../public/business_partners/samsung-logo.png" alt="Samsung logo" />
        </li>
        <li className={styles.partnersListItem}>
          <img src="../../public/business_partners/sodexo-logo.png" alt="Sodexo logo" />
        </li>
      </ul>
    </>
  );
};
