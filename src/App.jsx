import { RouterProvider } from "react-router-dom";
import {route} from './router';

function App() {
  

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App
