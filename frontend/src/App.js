import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero section/Hero";
import  {ProductProvider}  from "../../../Newlms/frontend/src/Components/Context/Context";
function App() {
  return (
    <ProductProvider>
      <Header />
      <Hero />
    </ProductProvider>
  );
}

export default App;
