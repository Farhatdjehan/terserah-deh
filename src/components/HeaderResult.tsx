import styles from "./../../styles/pages/DetailCategory.module.scss";

interface HeaderProps {
  title: string;
  subtitle: string;
}
export default function HeaderResult(props: HeaderProps) {
  const { title, subtitle } = props;
  return (
    <>
      <div className={styles.titleRandom}>{title}</div>
      <div className={styles.subTitleRandom}>{subtitle}</div>
    </>
  );
}
