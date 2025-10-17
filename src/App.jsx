import { RouterProvider} from "react-router-dom";
import './App.css';
// import RPRoutes from "./assets/pages/PermitRoutes/RPRoutes";
import RPRoutes from "./assets/pages/PermitRoutes/RPRoutes";
function App() {
  return(
    <RouterProvider router={RPRoutes} />
  )
}
export default App;