import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          {/* <Route path="news" element={<NewsPage/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
