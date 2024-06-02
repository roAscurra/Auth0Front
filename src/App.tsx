import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/Home";
import AdminPage from "./views/AdminPage";
import ClientPage from "./views/ClientPage";
import ClientProfilePage from "./views/ClientProfilePage";
import ErrorPage from "./views/ErrorPage";
import { AuthenticationGuard } from "./components/auth0/AuthenticationGuard";
import CallbackPage from "./components/auth0/CallbackPage";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={<AuthenticationGuard component={AdminPage} />}
        />
        <Route
          path="/cliente"
          element={<AuthenticationGuard component={ClientPage} />}
        />
        <Route
          path="/cliente/perfil"
          element={<AuthenticationGuard component={ClientProfilePage} />}
        />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;