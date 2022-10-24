import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  deleteCookie,
  getCookie,
  setCookie,
} from "../src/components/common/utils";
import DashboardLayout from "../src/components/DashboardLayout";
import styles from "./../styles/pages/Input.module.scss";
export default function Input() {
  const router = useRouter();
  const [dataList, setDataList]: any = useState();
  const [idState, setIdState]: any = useState();
  const [animation, setAnimation] = useState(false);
  const [deleteList, setDeleteList]: any = useState(false);
  const [deleteData, setDeleteData]: any = useState(false);
  const [dataCookie, setDataCookie]: any = useState([]);

  useEffect(() => {
    if (getCookie("dataRandom") !== "") {
      let tmp = getCookie("dataRandom");
      if (tmp !== undefined) {
        setDataCookie(JSON.parse(tmp));
      }
    }
  }, []);

  const handleSave = (e: any) => {
    e.preventDefault();
    let tmp = document.getElementById("input") as HTMLInputElement;
    const newData = { ...dataList };
    let arr = [...dataCookie];
    arr.push(newData);
    setDataCookie(arr);
    setCookie("dataRandom", JSON.stringify(arr), 90);
    if (tmp) {
      tmp.value = "";
    }
    setAnimation(true);
  };

  const handleChange = (e: any) => {
    const newData = { ...dataList };
    newData[e.target.name] = e.target.value;
    setDataList(newData);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 500);
  }, [animation]);

  useEffect(() => {
    if (dataCookie.length < 0) {
      setDeleteList(false);
    }
  }, [dataCookie]);

  useEffect(() => {
    if (deleteList) {
      setCookie("dataRandom", JSON.stringify(dataCookie), 90);
    }
  }, [deleteList, dataCookie]);

  const handleDelete = (e: any, id: any) => {
    e.preventDefault();
    const newData = [...dataCookie];
    newData.splice(id, 1);
    setIdState(id);
    setCookie("dataRandom", JSON.stringify(newData), 90);
    setDataCookie(newData);
  };

  const handleDeleteCookie = () => {
    deleteCookie("dataRandom");
    setDeleteList(true);
    router.reload();
  };

  return (
    <DashboardLayout pageTitle="Input">
      <form id="form" onSubmit={handleSave}>
        <input
          name="kategori"
          id="kategori"
          className={styles.inputForm}
          onChange={handleChange}
          placeholder="Masukkan Kategorinya ya!"
          required
        />
        <input
          name="input"
          id="input"
          className={styles.inputForm}
          onChange={handleChange}
          placeholder="Masukkan Pilihannya!"
        />
        <div className={styles.buttonAlign}>
          <button
            className={`${animation && "animate__animated animate__bounceIn"}`}
            type="submit"
          >
            Simpan
          </button>
        </div>
      </form>
      <div className={styles.listWrapper}>
        <div className={styles.listInputTitle}>List Acak</div>
        {dataCookie?.length > 0 ? (
          <div
            className={`${
              deleteList && "animate__animated animate__backOutLeft"
            }`}
          >
            {dataCookie.map((item: any, index: any) => {
              return (
                <div key={index} className={`${styles.itemInput}`}>
                  <div className={styles.title}>{item.input}</div>
                  <div
                    onClick={(e) => handleDelete(e, index)}
                    className={styles.buttonWrapper}
                  >
                    ×
                  </div>
                </div>
              );
            })}
            <>
              <Link href={`/random/custom?${dataList?.kategori}`}>
                <div className={styles.buttonAcak}>Siapin Acak</div>
              </Link>
              {dataCookie?.length > 0 && (
                <button
                  onClick={handleDeleteCookie}
                  className={styles.buttonAcak}
                >
                  Hapus List
                </button>
              )}
            </>
          </div>
        ) : (
          <div className={styles.notFoundList}>Tidak Ada List</div>
        )}
      </div>
    </DashboardLayout>
  );
}
