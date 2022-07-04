import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import ErrorPage from "./components/pages/Error";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ChatRoom />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
