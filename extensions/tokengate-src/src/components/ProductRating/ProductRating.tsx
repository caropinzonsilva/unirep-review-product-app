import React from "react";
import { ProductRatingScore } from "../ProductRatingScore";
import { ReviewButton } from "../ReviewButton";
import styles from "./ProductRating.module.css";

export const ProductRating = () => {
  return (
    <div className={styles.container}>
      <ProductRatingScore />
      <ReviewButton onClick={() => {}} />
    </div>
  );
};
