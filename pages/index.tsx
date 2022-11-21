import DashboardLayout from "../src/components/DashboardLayout";
import file from "./../public/file.png";
import create from "./../public/create.png";
import MainMenu from "../src/components/MainMenu";
import * as rocketData from "./../src/components/rocket.json";
import * as spaceData from "./../src/components/space.json";
import menu1 from "./../public/menu1.png";
import menu2 from "./../public/menu2.png";
import Menu from "../src/components/Menu";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <DashboardLayout pageTitle="Home">
      <div id="main-menu">
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          centerSlidePercentage={95}
          showThumbs={false}
          centerMode={true}
        >
          <Menu
            id={1}
            img={menu1}
            link="category"
            title="Acak dari Kategori yang Ada"
            sub="Udah disediain pilihannya nih tinggal kamu acak aja"
          />
          <Menu
            id={2}
            img={menu2}
            link="input"
            title="Masukkin Sendiri Pilihannya"
            sub="Input pilihannya sendiri berdasarkan yang kamu pikirin"
          />
        </Carousel>
      </div>
      {/* <MainMenu
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
      /> */}
    </DashboardLayout>
  );
}
