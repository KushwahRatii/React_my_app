import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import "./style/App.scss";
import "./style/Header.scss"
import "./style/Home.scss"
import "./style/Footer.scss"
import "./style/Contact.scss"
import Home from "./Components/Home";
import "./style/mediaquery.scss"

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/Services" element={<Services/>} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
