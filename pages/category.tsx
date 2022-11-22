import Image from "next/image";
import Link from "next/link";
import { category } from "../src/components/common/constant";
import DashboardLayout from "../src/components/DashboardLayout";
import styles from "././../styles/pages/Category.module.scss";
import menu from "./../public/assets/png/menu.png";

export default function Category() {
  return (
    <DashboardLayout pageTitle="Kategori">
      <div className={styles.wrap}>
        {category.map((item: any, index: any) => {
          return (
            <Link key={index} href={`/random/${index}?${item?.category}`}>
              <div className={styles.menu}>
                <div className={styles.images}>
                  <Image src={menu} />
                </div>
                <div className={styles.wrapText}>
                  <div className={styles.title}>{item?.category}</div>
                  <div className={styles.sub}>{item?.sub}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
