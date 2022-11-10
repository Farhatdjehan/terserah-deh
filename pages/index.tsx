import DashboardLayout from "../src/components/DashboardLayout";
import file from "./../public/file.png";
import create from "./../public/create.png";
import MainMenu from "../src/components/MainMenu";
import * as animationData from "./../src/components/lottery2.json";
import * as rocketData from "./../src/components/rocket.json";
import * as spaceData from "./../src/components/space.json";

export default function Home() {
  return (
    <DashboardLayout pageTitle="Home">
      <MainMenu
        link="category"
        file={rocketData}
        desc="Udah disediain pilihannya nih tinggal kamu <span>acak aja</span>."
        title="Pilih Kategori"
      />
      <MainMenu
        link="input"
        file={spaceData}
        desc="Input pilihannya sendiri berdasarkan yang <span>kamu pikirin</span>."
        title="Masukin Sendiri Pilihannya"
      />
    </DashboardLayout>
  );
}
