import DashboardLayout from "../src/components/DashboardLayout";
import styles from "./../styles/pages/Home.module.scss";
import file from "./../public/file.png";
import Image from "next/image";

export default function Home() {
  return (
    <DashboardLayout pageTitle="Home">
      <div className={styles.menuHome}>
        <div className={styles.text}>Masukin Sendiri Pilihannya</div>
        <div className={styles.illustration}>
          <Image src={file} width={80} height={105} />
        </div>
        <div className={styles.subText}>
          Input pilihannya sendiri berdasarkan yang <span>kamu pikirin</span>.
          Lalu acak pilihannya..
        </div>
        <div className={styles.navigateBtn}></div>
      </div>
      <div className={`${styles.menuHome} ${styles.invertHome}`}>
        <div className={styles.text}>Pilih Kategori</div>
        <div className={styles.illustration}>
          <Image src={file} width={80} height={105} />
        </div>
        <div className={styles.subText}>
          Udah disediain pilihannya nih tinggal kamu <span>acak aja</span>.
        </div>
        <div className={styles.navigateBtn}></div>
      </div>
    </DashboardLayout>
  );
}
