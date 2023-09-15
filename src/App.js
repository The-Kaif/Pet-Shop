import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Auth from "./components/auth/Auth";
import Panel from "./components/panel/Panel";

function App() {
  return (
    <div>
      {/* Define routes for the entire application */}
      <Routes>
        {/* Route for authentication pages */}
        <Route
          path="/auth/*"
          element={
            <Suspense fallback={<></>}>
              {/* Render the Auth component for authentication */}
              <Auth />
            </Suspense>
          }
        ></Route>
        
        {/* Catch-all route for invalid paths, redirect to login */}
        <Route path="*" element={<Navigate to={"/auth/login"} />} />
        
        {/* Route for the panel (authenticated) pages */}
        <Route
          path="/panel/*"
          element={
            <Suspense fallback={<></>}>
              {/* Render the Panel component for authenticated users */}
              <Panel />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
