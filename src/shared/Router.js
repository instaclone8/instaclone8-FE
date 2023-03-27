import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Main from "./../pages/Main";
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyPage from '../pages/MyPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* "/main" = 네비게이션바, 포스팅 조회하는 페이지 */}
        <Route path="/main" element={<Main />} />
        <Route path="/mypage/:id" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
