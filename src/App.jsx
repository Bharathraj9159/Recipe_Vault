// importing the react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// importing the all pages for routing 

import Login from "./pages/Login";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";
import ProtectedRoute from "./components/ProtectedRoute";
import Settings from "./pages/Logout";

// this component consist with the side bar
import AppLayout from "./components/AppLayout";

export default function App() {
  return (

    <BrowserRouter>
    
      <Routes>

        {/* Public */}

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* Pages with the sidebar */}

        <Route element={<AppLayout />}>
        
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />

          {/* Protectd routes for logout */}
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          {/* protected routes for the favt */}
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />
        </Route>

      </Routes>
    
    </BrowserRouter>
  );
}
