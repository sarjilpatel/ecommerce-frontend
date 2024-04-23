import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";

const LoginPageWrapper = lazy(() =>
  import("../pages/auth/login/LoginPageWrapper")
);
const SignUpPageWrapper = lazy(() =>
  import("../pages/auth/signup/SignUpPageWrapper")
);
const RequireAuth = lazy(() => import("./RequireAuth"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const CategorizationWrapper = lazy(() =>
  import("../pages/admin/categorization/CategorizationWrapper")
);
const BrandsWrapper = lazy(() => import("../pages/admin/brands/BrandsWrapper"));
const SizesWrapper = lazy(() => import("../pages/admin/sizes/SizesWrapper"));
const AdminDashboard = lazy(() =>
  import("../pages/admin/admindashboard/AdminDashboard")
);

const AllRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<LoginPageWrapper />} />
        <Route path="/signup" element={<SignUpPageWrapper />} />

        <Route element={<RequireAuth allowedRole="admin" />}>
          <Route path="admin/">
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="brands/*" element={<BrandsWrapper />} />
            <Route
              path="categorization/*"
              element={<CategorizationWrapper />}
            />
            <Route path="sizes/*" element={<SizesWrapper />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
