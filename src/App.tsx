import { Navigation } from "./assets/components/navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { AuthProvider } from "./context/AuthContext";
function App() {
  /* const [playerCreator, setPlayerCreator] = useState(false); */

  /*   const handleTogglePlayerCreator = (value: boolean) => {
    setPlayerCreator(value);
  }; */

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
