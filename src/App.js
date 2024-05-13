
import { Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Header from './components/Header';
import SignUp from './components/SignUp';
import Propertydetail from './components/Propertydetail';
import Footer from './components/Footer';

function App() {
  return (
   <div className='max-w-[1440px] mx-auto '>
   <Header />
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/signUp' element={<SignUp/>} />
    <Route path='/property/:id' element={<Propertydetail/>} />
   </Routes>
   <Footer />
   </div>
  );
}

export default App;
