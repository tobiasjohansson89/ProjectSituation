import Home from './pages/home';
import DetailsPage from './pages/card-details';
import { createBrowserRouter, createRoutesFromElements, Route, Link, NavLink, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/DetailsPage' element={<DetailsPage></DetailsPage>}></Route>
      </Route>
   )
);

export default function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
  }