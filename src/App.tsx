import Accordion from "./features/Accordion";
import Devices from "./features/Devices";
import FilterSection from "./features/FilterSection";
import Footer from "./features/Footer";
import LatestNews from "./features/LatestNews";
import Multiview from "./features/Multiview";
import NavbarMan from "./features/navbar/NavbarMan";
import OnAnyDevice from "./features/OnAnyDevice";
import ScrollToTop from "./features/ScrollToTop";
import Subscribe from "./features/Subscribe";
import FirstSection from "./pages/FirstSection";
import ComponentReveal from "./animations/ComponentReveal";

const App = () => {
  return (
    <main className=" h-auto w-auto flex flex-col bg-[#F5F5F5] font-family-Poppins">
      <NavbarMan />
      <FirstSection />
      <ComponentReveal>
        <FilterSection />
      </ComponentReveal>
      <ComponentReveal>
        <div className=" lg:mx-[10rem] h-auto flex flex-col sm:flex-row gap-8">
          <OnAnyDevice />
          <Devices />
        </div>
      </ComponentReveal>
      <ComponentReveal>
        <Multiview />
      </ComponentReveal>
      <ComponentReveal>
        <Subscribe />
      </ComponentReveal>
      <ComponentReveal>
        <LatestNews />
      </ComponentReveal>
      <ComponentReveal>
        <Accordion />
      </ComponentReveal>
      <ComponentReveal>
        <ScrollToTop />
      </ComponentReveal>
      <Footer />
    </main>
  );
};

export default App;
