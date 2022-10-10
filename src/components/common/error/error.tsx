import React from "react";
import styles from "./../error.module.scss";
interface TextProps {
  text: string;
}
export default function Error(props: TextProps) {
  const { text } = props;
  return (
    <div className={styles.emptyCaseText}>
      Gagal memuat {text.toLowerCase()}
    </div>
  );
}
