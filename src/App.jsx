import Header from "./components/Header/Header.jsx";
import DescriptionCto3 from "./components/DescriptionCto3/DescriptionCto3.jsx";
import ProductSilo from "./components/ProductSilo/ProductSilo.jsx";
import Sizevars from "./components/SizeVar/SizeVar.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <DescriptionCto3 />
        <ProductSilo/>
        <Sizevars/>
      </main>
    </div>
  );
}

export default App;