import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import ErrorPage from "./components/pages/Error";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<ChatRoom />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
