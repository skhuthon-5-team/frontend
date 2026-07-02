import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthStore } from "./store/authStore";

import RootLayout from "./components/layout/RootLayout";
import MyPageLayout from "./components/layout/MyPageLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SignupCompletePage from "./pages/SignupCompletePage";
import FeedDetailPage from "./pages/FeedDetailPage";
import HallOfFamePage from "./pages/HallOfFamePage";
import CommunityPage from "./pages/CommunityPage";
import CommunityWritePage from "./pages/CommunityWritePage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import UserProfilePage from "./pages/UserProfilePage";
import RecordCreatePage from "./pages/RecordCreatePage";
import RetrospectivePage from "./pages/RetrospectivePage";
import RetrospectiveDetailPage from "./pages/RetrospectiveDetailPage";
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
          <Route path="hall-of-fame" element={<HallOfFamePage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route
            path="community/write"
            element={
              <ProtectedRoute>
                <CommunityWritePage />
              </ProtectedRoute>
            }
          />
          <Route path="community/:id" element={<CommunityDetailPage />} />
          <Route path="users/:username" element={<UserProfilePage />} />
          <Route
            path="record"
            element={
              <ProtectedRoute>
                <RecordCreatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="retrospective/:id"
            element={
              <ProtectedRoute>
                <RetrospectivePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="retrospective/:id/detail"
            element={
              <ProtectedRoute>
                <RetrospectiveDetailPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="mypage"
            element={
              <ProtectedRoute>
                <MyPageLayout />
              </ProtectedRoute>
            }
          >
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
