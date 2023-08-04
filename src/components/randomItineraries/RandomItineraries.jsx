import styles from './randomItineraries.module.scss'
import CardItinerary from '../cardItinerary';
import { useEffect, useState } from 'react';

const RandomItineraries = ({ data, title, numToShow }) => {
  const [randomItineraries, setRandomItineraries] = useState([]);
  // VARIABLES ----------------
  // CONDITIONS ---------------
  const generateRandomItineraries = () => {
    if (data && data.length > 0) {
      const randomIndex = [...Array(data.length).keys()]
        .sort(() => 0.5 - Math.random())
        .slice(0, numToShow);

      const randomItineraries = randomIndex.map((index) => data[index]);
      setRandomItineraries(randomItineraries);
    }
  };

  useEffect(() => {
    generateRandomItineraries();
  }, [data, numToShow]);

  // FUNCTIONS ----------------
  // RETURN -------------------
  return (
    <div className={styles.randomAdventureContainer}>
    <h2 className={styles.randomAdventureTitle}>{title}</h2>
    <div className={styles.randomAdventureList}>
      {randomItineraries.map((itinerary) => (
        <CardItinerary key={itinerary.id} itinerary={itinerary} />
      ))}
    </div>
  </div>
  );
}

export default RandomItineraries;