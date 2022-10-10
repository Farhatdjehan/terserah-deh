import React from "react";
import styles from "./../error.module.scss";
interface TextProps {
  text: string;
}
export default function NotFound(props: TextProps) {
  const { text } = props;
  return <div className={styles.emptyCaseText}>{text} tidak ditemukan</div>;
}
