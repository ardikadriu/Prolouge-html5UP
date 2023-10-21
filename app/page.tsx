import Header from "./components/Header";
import Footer from "./Sections/Footer";
import Aboutme from "./Sections/Aboutme";
import Intro from "./Sections/Intro";
import Protfolio from "./Sections/Protfolio";

export default function Home() {
  return (
    <main id="main">
      <Header />
      <Intro />
      <Protfolio />
      <Aboutme />
      <Footer />
    </main>
  );
}
