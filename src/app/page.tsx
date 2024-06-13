import Image from "next/image";
import Header from "./components/header";
import Gallery from "./components/gallery";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="m-auto w-full max-w-[1440px]">
      <Header />
      <Gallery itemsNo={0} />
      <Footer />
    </main>
  );
}
