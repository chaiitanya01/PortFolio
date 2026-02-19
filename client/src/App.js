import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import MobileNav from "./components/MobileNav/MobileNav";


function App() {

  return (
    <>
      
    <MobileNav/>
    <Layout/>
    <div className="container">

    <About/>
    <Education/>
    <Techstack/>
    <Projects/>
    <WorkExp/>
   
    
  
    </div>
 
    <div className="footer pb-3 ms-3">
      <h4 className="text-center">
        @ChaitanyaKulkarni &copy; 2026
      </h4>
    </div>
    </>
  )
}

export default App