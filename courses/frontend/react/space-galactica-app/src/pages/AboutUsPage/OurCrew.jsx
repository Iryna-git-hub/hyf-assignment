import styles from "./OurCrew.module.css";

export const OurCrew = () => {
  return (
    <>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <ul className={styles.crewList}>
        <li className={styles.crewItem}>
          <article>
            <img
              src="/crew/image-anousheh-ansari.png"
              alt="Sarah Vega photo"
            />
            <header>
              <h3>Sarah Vega</h3>
              <p>Captain</p>
            </header>
            <p>
              A former NASA astronaut with over 15 years of experience, Captain
              Vega leads our missions with unparalleled expertise and a passion
              for space exploration.
            </p>
          </article>
        </li>
        <li className={styles.crewItem}>
          <article>
            <img
              src="/crew/image-douglas-hurley.png"
              alt="Dr. Leo Redding photo"
            />
            <header>
              <h3>Dr. Leo Redding</h3>
              <p>Chief astrophysicist</p>
            </header>
            <p>
              Our chief astrophysicist, Dr. Redding, is a renowned scientist who
              has contributed to major space discoveries. He ensures that every
              journey is as educational as it is exhilarating.
            </p>
          </article>
        </li>
        <li className={styles.crewItem}>
          <article>
            <img
              src="/crew/image-victor-glover.png"
              alt="Hana Lee photo"
            />
            <header>
              <h3>Hana Lee</h3>
              <p>Chief Engineer</p>
            </header>
            <p>
              With her extensive background in aerospace engineering, Hana Lee
              is responsible for the state-of-the-art technology that powers our
              spacecraft. Her innovation ensures that our travelers are always
              in safe hands.
            </p>
          </article>
        </li>
        <li className={styles.crewItem}>
          <article>
            <img
              src="/crew/image-mark-shuttleworth.png"
              alt="Alex Santos photo"
            />
            <header>
              <h3>Alex Santos</h3>
              <p>Mission Specialist</p>
            </header>
            <p>
              As a mission specialist, Alex’s job is to ensure that every aspect
              of the journey runs smoothly. With a background in both science
              and adventure tourism, Alex is the perfect guide for our space
              travelers.
            </p>
          </article>
        </li>
        <li className={styles.crewItem}>
          <article>
            <img
              src="/crew/image-anousheh-ansari.png"
              alt="Maya Patel photo"
            />
            <header>
              <h3>Maya Patel</h3>
              <p>Crew Member</p>
            </header>
            <p>
              Maya brings a unique blend of technical skills and customer
              service experience to the team. She’s always ready to assist with
              any needs and to make sure every traveler has an unforgettable
              experience.
            </p>
          </article>
        </li>
      </ul>
    </>
  );
};
