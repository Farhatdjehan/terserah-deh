import Image from "next/image";
import Link from "next/link";
import styles from "./../../styles/pages/Home.module.scss";

interface MenuProps {
  link: string;
  file: any;
  desc: string;
}

export default function MainMenu(props: MenuProps) {
  const { link, file, desc } = props;

  return (
    <Link href={`/${link}`} passHref>
      <div className={`${styles.menuHome} `}>
        <div className={styles.text}>Masukin Sendiri Pilihannya</div>
        <div className={styles.illustration}>
          <Image src={file} width={80} height={105} alt="file" />
        </div>
        <div className={styles.subText}>
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        <div className={styles.navigateBtn}></div>
      </div>
    </Link>
  );
}
