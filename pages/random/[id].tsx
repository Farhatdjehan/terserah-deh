import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { category } from "../../src/components/common/constant";
import { getCookie } from "../../src/components/common/utils";
import DashboardLayout from "../../src/components/DashboardLayout";
import styles from "./../../styles/pages/DetailCategory.module.scss";
import Confetti from "react-confetti";
import tada from "../../public/tada.mp3";
import drum from "../../public/drum.mp3";
import HeaderResult from "../../src/components/HeaderResult";
import ReactAudioPlayer from "react-audio-player";
import Image from "next/image";
import main from "./../../public/assets/png/main.png";
import { emojiData } from "../../src/components/common/emojiData";

export default function CategoryDetail() {
  const router = useRouter();
  const [count, setCount] = useState(3);
  const [countShow, setCountShow] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [idData, setIdData]: any = useState();
  const [width, setWidth]: any = useState();
  const [height, setHeight]: any = useState();
  const [emojiShow, setEmojiShow]: any = useState();
  const [dataCookie, setDataCookie]: any = useState([]);
  let path = router?.asPath.split("?");

  useEffect(() => {
    setTimeout(function () {
      setAnimation(false);
    }, 500);
  }, [count]);

  useEffect(() => {
    if (count !== 4) {
      setAnimation(true);
    }
  }, [count, countShow]);

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

  function searchStringInArray(strArray: any) {
    strArray.indexOf("mie");
  }

  useEffect(() => {}, [emojiShow]);

  useEffect(() => {
    if (dataCookie) {
      let tmp;
      if (router?.query?.id === "custom") {
        tmp = emojiData.filter((e) =>
          e.type.includes(dataCookie[idData]?.input?.toLowerCase())
        );
      } else {
        tmp = emojiData.filter((e) =>
          e.type.includes(dataCookie[idData]?.toLowerCase())
        );
      }
      setEmojiShow(tmp);
    }
  }, [dataCookie, idData, router]);

  const counter = () => {
    let num = count;
    const retry = () => {
      num -= 1;
      setCount(num);
      setAnimation(true);
      if (num <= 0) {
        // setAnimation(false);
        clearInterval(attempt);
      }
    };
    let attempt = setInterval(retry, 1000);
  };

  return (
    <DashboardLayout pageTitle="Random Id">
      {showResult && <Confetti recycle={false} width={width} height={height} />}
      <div className={styles.categoryContainer}>
        <div className={styles.categoryWrapper}>
          {showResult ? (
            <HeaderResult
              title={`Hasil Acakan ${path[1]} Kamu`}
              subtitle="Jangan curang ya!!"
            />
          ) : (
            <HeaderResult
              title="Siap Untuk Acak?"
              subtitle="Tekan tombol acak kalau dah siap!"
            />
          )}
        </div>
        {showResult && (
          <div className={styles.wrapperResult}>
            {dataCookie && (
              <div className={styles.emoji}>{emojiShow[0]?.emoji}</div>
            )}
            <div
              className={`${styles.selectedOption} animate__animated animate__heartBeat`}
            >
              <div>
                {router?.query?.id === "custom"
                  ? dataCookie[idData]?.input
                  : dataCookie[idData]}
              </div>
            </div>
            <ReactAudioPlayer src={tada} autoPlay />
          </div>
        )}
        {countShow && (
          <>
            <div
              className={`${styles.countNumber} ${
                animation && "animate__animated animate__bounceIn"
              }`}
            >
              {count}
            </div>
            <ReactAudioPlayer src={drum} autoPlay />
          </>
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
      <div className={styles.pattern}>
        <Image src={main} />
      </div>
    </DashboardLayout>
  );
}
