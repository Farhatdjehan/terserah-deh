import { useState } from "react";
import DashboardLayout from "../../src/components/DashboardLayout";
import styles from "./../../styles/pages/DetailCategory.module.scss";

export default function CategoryDetail() {
  const [count, setCount] = useState(3);
  return (
    <DashboardLayout pageTitle="Random Id">
      <div className={styles.categoryContainer}>
        <div className={styles.categoryWrapper}>
          <div className={styles.titleRandom}>Siap Untuk Acak?</div>
          <div className={styles.subTitleRandom}>
            Tekan tombol acak jika udah siap
          </div>
        </div>
        <div className={styles.countNumber}>{count}</div>
        <div className={styles.buttonRandom}>
          <button>Acak</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
