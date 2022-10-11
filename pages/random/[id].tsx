import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { category } from "../../src/components/common/constant";
import { getCookie } from "../../src/components/common/utils";
import DashboardLayout from "../../src/components/DashboardLayout";
import styles from "./../../styles/pages/DetailCategory.module.scss";

export default function CategoryDetail() {
  const router = useRouter();
  const [count, setCount] = useState(3);
  const [countShow, setCountShow] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [idData, setIdData]: any = useState();
  const [dataCookie, setDataCookie]: any = useState([]);

  const counter = () => {
    let num = 3;
    const retry = () => {
      num -= 1;
      setCount(num);
      if (num <= 0) clearInterval(attempt);
    };
    let attempt = setInterval(retry, 1000);
  };

  useEffect(() => {
    if (countShow) {
      counter();
    }
  }, [countShow]);

  useEffect(() => {
    if (count <= 0) {
      let result;
      result = Math.floor(Math.random() * dataCookie?.length);
      setCountShow(false);
      setCount(3);
      setIdData(result);
      setShowResult(true);
    }
  }, [count]);

  useEffect(() => {
    let id: any = router?.query?.id;

    if (router?.query?.id === "custom") {
      if (getCookie("dataRandom") !== "") {
        let tmp = getCookie("dataRandom");
        if (tmp !== undefined) {
          setDataCookie(JSON.parse(tmp));
        }
      }
    } else {
      setDataCookie(category[parseInt(id)].list);
    }
    console.log(router?.query?.id);
  }, [router]);

  const handleRandom = (e: any) => {
    e.preventDefault();
    setCountShow(true);
    setShowResult(false);
  };

  return (
    <DashboardLayout pageTitle="Random Id">
      <div className={styles.categoryContainer}>
        <div className={styles.categoryWrapper}>
          {showResult ? (
            <>
              <div className={styles.titleRandom}>Hasil Acakan!</div>
              <div className={styles.subTitleRandom}>Jangan curang ya!</div>
            </>
          ) : (
            <>
              <div className={styles.titleRandom}>Siap Untuk Acak?</div>
              <div className={styles.subTitleRandom}>
                Tekan tombol acak jika udah siap
              </div>
            </>
          )}
        </div>
        {showResult && (
          <div className={styles.selectedOption}>
            {router?.query?.id === "custom"
              ? dataCookie[idData]?.input
              : dataCookie[idData]}
          </div>
        )}
        {countShow && <div className={styles.countNumber}>{count}</div>}
        {showResult ? (
          <div className={styles.buttonRandom}>
            <button onClick={handleRandom}>Acak Lagi</button>
          </div>
        ) : (
          <div className={styles.buttonRandom}>
            <button onClick={handleRandom}>Acak</button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
