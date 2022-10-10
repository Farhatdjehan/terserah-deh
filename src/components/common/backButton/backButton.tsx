import { useRouter } from "next/router";
import React from "react";
import styles from "./backButton.module.scss";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div onClick={handleBack} className={styles.backButton}>
      {`< Kembali`}
    </div>
  );
}
