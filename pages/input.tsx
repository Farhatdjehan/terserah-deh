import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { categoryCustom } from "../src/components/common/constant";
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
  const [id, setId] = useState();
  const [deleteList, setDeleteList]: any = useState(false);
  const [deleteData, setDeleteData]: any = useState(false);
  const [show, setShow]: any = useState(false);
  const [value, setValue]: any = useState();
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
    if (dataCookie?.length < 0) {
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
    router.reload();
    // setDeleteList(true);
  };
  const handleCheckSender = (e: any) => {
    let data: any = document.querySelector("#show");
    data?.checked;
    setShow(data?.checked);
  };

  const handleActive = (e: any, index: any, value: any) => {
    e.preventDefault();
    let newData = { ...dataList };
    setId(index);
    newData.kategori = value;
    setDataList(newData);
  };
  return (
    <DashboardLayout pageTitle="Input">
      <form id="form" onSubmit={handleSave}>
        <div className={styles.categoryWrap}>
          <div className={styles.title}>Kategori Yang Mau Diacak?</div>
          <div className={styles.checkbox}>
            <input
              onChange={handleCheckSender}
              type="checkbox"
              id="show"
              name="show"
            />
            <label htmlFor="show">Lainnya</label>
          </div>
        </div>
        {!show && (
          <div className={styles.wrapCustom}>
            {categoryCustom.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  onClick={(e) => handleActive(e, index, item)}
                  className={styles.categoryCustom}
                >
                  <div className={`${index === id && styles.active}`}>
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {show && (
          <input
            name="kategori"
            id="kategori"
            className={styles.inputForm}
            onChange={handleChange}
            placeholder="Masukkan Kategorinya ya!"
            required
          />
        )}
        <div className={styles.title}>Input Apa?</div>
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
          <div>
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
