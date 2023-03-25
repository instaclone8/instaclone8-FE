import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Main from "./../pages/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* "/main" = 네비게이션바, 포스팅 조회하는 페이지 */}
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
