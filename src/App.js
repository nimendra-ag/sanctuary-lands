import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from './Components/Navigationbar';
import Pagecarousel from './Components/Carousel';
function App() {
  return (
    <div className='body'>
      <Navigationbar/>
      <Pagecarousel/>
    </div>
  );
}

export default App;
