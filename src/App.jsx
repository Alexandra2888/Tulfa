import Header from "./components/Header/Header.jsx";
import DescriptionCto3 from "./components/DescriptionCto3/DescriptionCto3.jsx";
import ProductSilo from "./components/ProductSilo/ProductSilo.jsx";
import SizeVars from "./components/SizeVar/SizeVar.jsx";
import ColorVar from "./components/ColorVar/ColorVar.jsx";
import FabricVar from "./components/FabricVar/FabricVar.jsx";
import LifeStyle from "./components/LifeStyle/LifeStyle.jsx";
import CloseUpShots from "./components/CloseUpShots/CloseUpShots.jsx";
import Installation from "./components/Installation/Installation.jsx";
import Dimensions from "./components/Dimensions/Dimensions.jsx";
import Callout from "./components/Callout/Callout.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <DescriptionCto3 />
        <ProductSilo/>
        <SizeVars />
        <ColorVar />
        <FabricVar />
        <LifeStyle />
        <CloseUpShots />
        <Installation />
        <Dimensions/>
        <Callout />
        <Footer/>
      </main>
    </div>
  );
}

export default App;