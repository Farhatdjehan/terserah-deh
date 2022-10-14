import { useRouter } from "next/router";
import { useState, useEffect, useReducer, useRef } from "react";
import { category } from "../../src/components/common/constant";
import { getCookie } from "../../src/components/common/utils";
import DashboardLayout from "../../src/components/DashboardLayout";
import styles from "./../../styles/pages/DetailCategory.module.scss";
import "animate.css";
import Confetti from "react-confetti";
import tada from "../../public/tada.mp3";
import ReactAudioPlayer from "react-audio-player";
// const tada = require("./../../public/tada.mp3");

export default function CategoryDetail() {
  const router = useRouter();
  const [count, setCount] = useState(3);
  const [countShow, setCountShow] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [idData, setIdData]: any = useState();
  const [width, setWidth]: any = useState();
  const [height, setHeight]: any = useState();
  const [dataCookie, setDataCookie]: any = useState([]);
  const prevCountRef: any = useRef();

  const counter = () => {
    let num = count;
    const retry = () => {
      num -= 1;
      setCount(num);
      setAnimation(true);
      if (num <= 0) {
        setAnimation(false);

        clearInterval(attempt);
      }
    };
    let attempt = setInterval(retry, 1000);
  };

  useEffect(() => {
    setTimeout(function () {
      setAnimation(false);
    }, 800);
  }, [count]);

  useEffect(() => {
    if (count !== 4) {
      // console.log(count !== 4);
      setAnimation(true);
    }
  }, [count, countShow]);

  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevCountRef.current = count;
  }, []);

  const usePrevious = (value: any) => {
    const ref = useRef();
    ref.current = value;
    return ref.current;
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
      setDataCookie(category[parseInt(id)]?.list);
    }
  }, [router]);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const handleRandom = (e: any) => {
    e.preventDefault();
    setCountShow(true);
    setShowResult(false);
  };

  return (
    <DashboardLayout pageTitle="Random Id">
      {showResult && <Confetti recycle={false} width={width} height={height} />}
      <div className={styles.categoryContainer}>
        <div className={styles.categoryWrapper}>
          {showResult ? (
            <>
              <div className={styles.titleRandom}>Hasil Acakan</div>
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
          <>
            <div
              className={`${styles.selectedOption} animate__animated animate__heartBeat`}
            >
              <div>
                {router?.query?.id === "custom"
                  ? dataCookie[idData]?.input
                  : dataCookie[idData]}
              </div>
            </div>
            {/* <ReactAudioPlayer src={tada} autoPlay controls /> */}
            {/* <audio src={require("../../public/tada.mp3")} autoPlay /> */}
          </>
        )}
        {countShow && (
          <div
            className={`${styles.countNumber} ${
              animation && "animate__animated animate__bounceIn"
            }`}
          >
            {count}
          </div>
        )}
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
