
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Page/Banner/Banner';
import Blog from './components/Page/Blog/Blog';
import Footer from './components/Page/Footer/Footer';
import Home from './components/Page/Home/Home';
import NotFound from './components/Page/NotFound/NotFound';
import Services from './components/Page/Services/Services';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
