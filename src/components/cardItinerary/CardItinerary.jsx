import styles from './cardItinerary.module.scss'
import { LuArrowRight } from "react-icons/lu";

const CardItinerary = ({itinerary}) => {
  // VARIABLES ----------------
  // CONDITIONS ---------------
  const {
    id,
    budget,
    title,
    departure,
    boatType,
    numberOfDays,
    departureDate,
    arrivalDate,
    reservations,
    reservationsType,
    reservationsAvailable,
  } = itinerary;
  // FUNCTIONS ----------------
  // RETURN -------------------
  return (
  <div className={styles.cardWrap}>
    <div className={styles.card}>
      <div className={styles.budget}>
        {budget.currencyCode} {budget.value}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.infoContainer}>
        <div className={styles.departure}>
          <span className={styles.key}>Departure:</span>
          <span className={styles.port}>{departure.Port}</span>
        </div>
        <div className={styles.boatType}>
          <span>{boatType}</span>
          <span>{numberOfDays} days</span>
        </div>
      </div>
      <div className={styles.dates}>
        <span className={styles.departureDate}>{departureDate}</span>
        <span className={styles.arrowIcon}> <LuArrowRight/> </span>
        <span className={styles.arrivalDate}>{arrivalDate}</span>
      </div>
      <div className={styles.reservations}>
        <span>{reservations}</span>
        <span className={styles.reservationsType}>{reservationsType}</span>
      </div>
      <div className={styles.reservationsAvailable}>
        <span className={styles.reservationsAvailableText}>available {reservationsAvailable} </span>
      </div>
      <button className={styles.button}>Reservation</button>
    </div>
  </div>
  );
}

export default CardItinerary;