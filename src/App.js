import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Routes, Route } from "react-router-dom"
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from './Home'
// Define your routes
const Routes = () => {
  const routes = [
    {
      path: '/',
      element: <Home />
    }
  ];
  return useRoutes(routes);
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);
function App() {

  return (
    <div className="App">
      <BrowserRouter>  {/* Ensure the app is wrapped with a Router */}
        <Routes />
      </BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Test />} />
        <Route path="about" element={<Test1 />} />
        <Route path="contact" element={<Test1 />} />
      </Routes> */}
    </div>
  );
}

export default App;
// export default <RouterProvider router={router} />