
import ReactDOM from "react-dom/client";
import App from "./App";

// imporitng the index css style
import "./index.css";

// imporitng the context
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </AuthProvider>
);