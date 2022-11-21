import Image from "next/image";
import Link from "next/link";
import styles from "./Menu.module.scss";
interface MenuProps {
  id?: any;
  title?: string;
  sub?: string;
  img?: any;
  link?: any;
}
export default function Menu(props: MenuProps) {
  const { id, title, sub, img, link } = props;
  return (
    <Link href={`/${link}`} passHref>
      <div id={`menu-${id}`} className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={img} />
        </div>
        <div className={styles.textWrap}>
          <div className={styles.title}>{title}</div>
          <div className={styles.sub}>
            {/* Udah disediain pilihannya nih tinggal kamu acak aja */}
            {sub}
          </div>
        </div>
      </div>
    </Link>
  );
}
