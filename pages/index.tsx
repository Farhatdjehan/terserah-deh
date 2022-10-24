import DashboardLayout from "../src/components/DashboardLayout";
import file from "./../public/file.png";
import create from "./../public/create.png";
import MainMenu from "../src/components/MainMenu";
import * as animationData from "./../src/components/lottery2.json";

export default function Home() {
  return (
    <DashboardLayout pageTitle="Home">
      <MainMenu
        link="input"
        file={animationData}
        desc="Input pilihannya sendiri berdasarkan yang <span>kamu pikirin</span>. Lalu acak pilihannya.."
        title="Masukin Sendiri Pilihannya"
      />
      <MainMenu
        link="category"
        file={animationData}
        desc="Udah disediain pilihannya nih tinggal kamu <span>acak aja</span>."
        title="Pilih Kategori"
      />
    </DashboardLayout>
  );
}
