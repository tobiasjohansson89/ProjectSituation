import Home from './pages/home';
import DetailsPage from './pages/card-details';
import Layout from './layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="detailspage" element={<DetailsPage/>} />
            </Routes>
         </Layout>
      </BrowserRouter>
   );
}