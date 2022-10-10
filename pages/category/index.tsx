import DashboardLayout from "../../src/components/DashboardLayout";
import styles from "././../../styles/pages/Category.module.scss";

export default function Category() {
  return (
    <DashboardLayout pageTitle="Kategori">
      {[...Array(5)].map((item: any, index: any) => {
        return (
          <div key={index} className={styles.CategoryItem}>
            Tes
          </div>
        );
      })}
    </DashboardLayout>
  );
}
