import Image from "next/image";
import Link from "next/link";
import styles from "./../../styles/pages/Home.module.scss";
import Lottie from "react-lottie";

interface MenuProps {
  link: string;
  file: any;
  desc: string;
  title: string;
}

export default function MainMenu(props: MenuProps) {
  const { link, file, desc, title } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: file,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Link href={`/${link}`} passHref>
      <div className={`${styles.menuHome} `}>
        <div className={styles.text}>{title}</div>
        <div className={styles.illustration}>
          <Lottie options={defaultOptions} height={135} width={135} />
        </div>
        <div className={styles.subText}>
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        <div className={styles.navigateBtn}></div>
      </div>
    </Link>
  );
}
