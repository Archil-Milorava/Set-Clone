import Accordion from "./features/Accordion";
import Devices from "./features/Devices";
import FilterSection from "./features/FilterSection";
import LatestNews from "./features/LatestNews";
import Multiview from "./features/Multiview";
import OnAnyDevice from "./features/OnAnyDevice";
import Subscribe from "./features/Subscribe";
import FirstSection from "./pages/FirstSection";

const App = () => {
  return (
    <main className=" h-auto w-auto flex flex-col bg-[#F5F5F5]">
      <FirstSection />
      <FilterSection />
      <div className=" mx-[10rem] h-auto flex flex-col sm:flex-row gap-8">
        <OnAnyDevice />
        <Devices />
      </div>
      <Multiview />
      <Subscribe />
      <LatestNews />
      <Accordion />
    </main>
  );
};

export default App;
