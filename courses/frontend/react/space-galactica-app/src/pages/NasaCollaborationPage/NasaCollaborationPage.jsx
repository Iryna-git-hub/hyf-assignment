import React, { useState, useEffect } from "react";
import styles from "./NasaCollaborationPage.module.css";
import { RoverPhoto } from "./RoverPhoto";

const API_KEY = "k6dnEwnFODhJZQEzew813eX723Nl0voBWnP5NykB";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://rovers.nebulum.one/api/v1/rovers/curiosity/photos?earth_date=2015-6-3`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json(),
      );
      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();

    const fetchDailyImg = async () => {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json(),
      );
      setDailyImg(dailyImgResponse);
    };

    fetchDailyImg();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {dailyImg?.url ? (
            <>
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
              {dailyImg.media_type === "image" ? (
                <img
                  className={styles.nasaPicOfTheDayImg}
                  src={dailyImg.url}
                  alt={dailyImg.title}
                />
              ) : (
                <video
                  className={styles.nasaPicOfTheDayImg}
                  src={dailyImg.url}
                  controls
                ></video>
              )}
            </>
          ) : (
            <p>Loading picture of the day...</p>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            <ul className={styles.roverPhotoList}>
              {roverPhoto.photos.map((photo) => {
                return (
                  <RoverPhoto
                    key={photo.id}
                    src={photo.img_src}
                    date={photo.earth_date}
                    roverName={photo.rover.name}
                  />
                );
              })}
            </ul>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
