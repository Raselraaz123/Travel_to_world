
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/Page/AboutMe/AboutMe';
import Banner from './components/Page/Banner/Banner';
import Blog from './components/Page/Blog/Blog';
import Checkout from './components/Page/Checkout/Checkout';
import Footer from './components/Page/Footer/Footer';
import Home from './components/Page/Home/Home';
import Login from './components/Page/Login/Login';
import NotFound from './components/Page/NotFound/NotFound';
import Register from './components/Page/Register/Register';
import RequierAuth from './components/Page/RequierAuth/RequierAuth';
import ServiceDetailItem from './components/Page/ServiceDetailItem/ServiceDetailItem';
import Services from './components/Page/Services/Services';


function App() {
  // app.js is main
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/services/servicesId"
          element={<ServiceDetailItem></ServiceDetailItem>}
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/aboutme"
          element={
            <RequierAuth>
              <AboutMe></AboutMe>
            </RequierAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout"
          element={
            <RequierAuth>
              <Checkout></Checkout>
            </RequierAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
