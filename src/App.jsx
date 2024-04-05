import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AllRoutes from "./app/routes/AllRoutes";
import Loader from "./app/components/Loader";
import { getUserDetails } from "./core/requests";
import useLoading from "./app/hooks/useLoading";
import useAuth from "./app/hooks/useAuth";
import AdminSidebarWrapper from "./app/components/Sidebar/AdminSidebar/AdminSidebar";
import { Toaster } from "react-hot-toast";

function App() {
  const { isLoading, setIsLoading } = useLoading();
  const { setAuth } = useAuth();

  useEffect(() => {
    getUserDetails()
      .then((res) => {
        setAuth({ user: res.data.user, role: res.data.user.eRole });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <AdminSidebarWrapper />
      <Toaster position="top-right" reverseOrder={false} />

      {isLoading && <Loader />}
      <AllRoutes />
    </div>
  );
}

export default App;
