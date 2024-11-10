import Header from "./components/Header/Header.jsx";
import DescriptionCto3 from "./components/DescriptionCto3/DescriptionCto3.jsx";
import ProductSilo from "./components/ProductSilo/ProductSilo.jsx";
import SizeVars from "./components/SizeVar/SizeVar.jsx";
import ColorVar from "./components/ColorVar/ColorVar.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <DescriptionCto3 />
        <ProductSilo/>
        <SizeVars />
        <ColorVar/>
      </main>
    </div>
  );
}

export default App;