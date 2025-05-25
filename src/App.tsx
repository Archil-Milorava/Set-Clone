import Devices from "./features/Devices";
import FilterSection from "./features/FilterSection";
import OnAnyDevice from "./features/OnAnyDevice";
import FirstSection from "./pages/FirstSection";

const App = () => {
  return (
    <main className=" h-auto w-auto flex flex-col bg-[#F5F5F5]">
      <FirstSection />
      <FilterSection />
      <div className="bg-red-400 mx-[10rem] h-auto flex flex-col sm:flex-row gap-2">
        <OnAnyDevice />
        <Devices />
      </div>
    </main>
  );
};

export default App;
