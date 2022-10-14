import DashboardLayout from "../src/components/DashboardLayout";
import styles from "./../styles/pages/Home.module.scss";
import file from "./../public/file.png";
import create from "./../public/create.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <DashboardLayout pageTitle="Home">
      <Link href="/input" passHref>
        <div className={`${styles.menuHome} `}>
          <div className={styles.text}>Masukin Sendiri Pilihannya</div>
          <div className={styles.illustration}>
            <Image src={create} width={80} height={105} alt="file"/>
          </div>
          <div className={styles.subText}>
            Input pilihannya sendiri berdasarkan yang <span>kamu pikirin</span>.
            Lalu acak pilihannya..
          </div>
          <div className={styles.navigateBtn}></div>
        </div>
      </Link>
      <Link href="/category" passHref>
        <div className={styles.menuHome}>
          <div className={styles.text}>Pilih Kategori</div>
          <div className={styles.illustration}>
            <Image src={file} width={80} height={105} alt="file" />
          </div>
          <div className={styles.subText}>
            Udah disediain pilihannya nih tinggal kamu <span>acak aja</span>.
          </div>
          <div className={styles.navigateBtn}></div>
        </div>
      </Link>
    </DashboardLayout>
  );
}
