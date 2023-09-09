
// import './App.css';

import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Meal from "./components/Meal";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     <TopNav/>
     <Featured/>
     <Delivery/>
     <TopPicks/>
    <Meal/>
    <Categories/>
    <NewsLetter/>
    <Footer/>
    </div>


  );
}

export default App;
