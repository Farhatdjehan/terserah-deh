import React from "react";
import styles from "./../error.module.scss";
interface TextProps {
  text: string;
}

export default function EmptyCase(props: TextProps) {
  const { text } = props;

  return (
    <div className={styles.emptyCaseText}>Belum ada {text.toLowerCase()}</div>
  );
}
