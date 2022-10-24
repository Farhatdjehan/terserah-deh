import Link from "next/link";
import { category } from "../src/components/common/constant";
import DashboardLayout from "../src/components/DashboardLayout";
import styles from "././../styles/pages/Category.module.scss";

export default function Category() {
  return (
    <DashboardLayout pageTitle="Kategori">
      {category.map((item: any, index: any) => {
        return (
          <Link key={index} href={`/random/${index}?${item?.category}`}>
            <div className={styles.categoryWrapper}>
              <div className={styles.CategoryItem}>
                <div>{item?.category}</div>
              </div>
              <div className={styles.ButtonNavigation}></div>
            </div>
          </Link>
        );
      })}
    </DashboardLayout>
  );
}
