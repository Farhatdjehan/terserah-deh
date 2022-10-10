import { useRouter } from "next/router";
import { useState } from "react";
import ModalComponent from "../src/components/common/ModalComponent";
import { handleBack } from "../src/components/common/utils";
import DashboardLayout from "../src/components/DashboardLayout";
import styles from "./../styles/pages/Input.module.scss";
export default function Input() {
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const handleSave = (e: any) => {
    e.preventDefault();
  };
  const handleChange = (e: any) => {
    console.log(e);
  };
  const handleModal = () => {
    setModal(true);
  };
  return (
    <DashboardLayout pageTitle="Input">
      {/* <div className={styles.listInputTitle}>Masukin Pilihannya</div> */}
      <div className={styles.handleInput}>
        <form onSubmit={handleSave}>
          <input
            name="input"
            id="input"
            className={styles.inputForm}
            onChange={handleChange}
            placeholder="Masukkan Pilihannya!"
          />
          <div className={styles.buttonAlign}>
            <button type="submit">Simpan</button>
          </div>
        </form>
      </div>
      <div>
        <div className={styles.listInputTitle}>List Acak</div>
        <div className={styles.itemInput}>
          <div className={styles.title}>Satu</div>
          <div className={styles.buttonWrapper}>×</div>
        </div>
        <div className={styles.itemInput}>
          <div className={styles.title}>Satu</div>
          <div className={styles.buttonWrapper}>×</div>
        </div>
        <div className={styles.buttonAcak}>
          <button onClick={handleModal}>Acak!</button>
        </div>
      </div>
      {modal && <ModalComponent />}
    </DashboardLayout>
  );
}
