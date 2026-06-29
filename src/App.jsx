import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthStore } from "./store/authStore";

import RootLayout from "./components/layout/RootLayout";
import MyPageLayout from "./components/layout/MyPageLayout";

import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SignupCompletePage from "./pages/SignupCompletePage";
import FeedDetailPage from "./pages/FeedDetailPage";
import RecordCreatePage from "./pages/RecordCreatePage";
import RetrospectivePage from "./pages/RetrospectivePage";
import NotFoundPage from "./pages/NotFoundPage";

import ProfilePage from "./pages/mypage/ProfilePage";
import BadgePage from "./pages/mypage/BadgePage";
import MyPostsPage from "./pages/mypage/MyPostsPage";
import TimelinePage from "./pages/mypage/TimelinePage";
import AccountPage from "./pages/mypage/AccountPage";

function HomeRoute() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  return isLoggedIn ? <DashboardPage /> : <HomePage />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomeRoute />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="signup/complete" element={<SignupCompletePage />} />
          <Route path="feed/:id" element={<FeedDetailPage />} />
          <Route path="record" element={<RecordCreatePage />} />
          <Route path="retrospective/:id" element={<RetrospectivePage />} />

          <Route path="mypage" element={<MyPageLayout />}>
            <Route index element={<ProfilePage />} />
            <Route path="badges" element={<BadgePage />} />
            <Route path="posts" element={<MyPostsPage />} />
            <Route path="timeline" element={<TimelinePage />} />
            <Route path="account" element={<AccountPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
