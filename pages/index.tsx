import DashboardLayout from "../src/components/DashboardLayout";
import file from "./../public/file.png";
import create from "./../public/create.png";
import MainMenu from "../src/components/MainMenu";

export default function Home() {
  return (
    <DashboardLayout pageTitle="Home">
      <MainMenu
        link="input"
        file={create}
        desc="Input pilihannya sendiri berdasarkan yang <span>kamu pikirin</span>. Lalu acak pilihannya.."
      />
      <MainMenu
        link="category"
        file={file}
        desc="Udah disediain pilihannya nih tinggal kamu <span>acak aja</span>."
      />
    </DashboardLayout>
  );
}
