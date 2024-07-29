import Routes from "./src/routes";
import RoutesAuth from "./src/routesAuth";

const isUserAuth = true;


export default function App() {
  return isUserAuth ? <RoutesAuth/> : <Routes/>
}