import styles from "./ProductRatingScore.module.css";
import { Star } from "../../icons";

export const ProductRatingScore = () => {
  const score = 4;
  return (
    <div className={styles.container}>
      <p className={styles.score}>{parseInt(score).toFixed(1)}</p>
      <div className={styles.starAndReviews}>
        <div className={styles.stars}>
          {[...Array(5).keys()].map((index) => (
            <Star fill={index < score ? "#f7bd2b" : "#d5d5d5"} size={20} />
          ))}
        </div>
        <p className={styles.reviews}>(500 reviews)</p>
      </div>
    </div>
  );
};
