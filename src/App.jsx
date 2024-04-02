import { useLayoutEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import UserSidebar from "./app/components/Sidebar/UserSidebar/UserSidebar";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./app/redux/features/themeSlice";
import AllRoutes from "./app/routes/AllRoutes";
import Loader from "./app/components/Loader";
import { startLoading, stopLoading } from "./app/redux/features/loadingSlice";
import { loginUser } from "./app/redux/features/userSlice";
import axios from "axios";
import { getUserDetails } from "./core/requests";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.loadingState);

  useLayoutEffect(() => {
    dispatch(startLoading());
    getUserDetails()
      .then((res) => {
        dispatch(loginUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  }, []);

  return (
    <div className="app">
      {/* <UserSidebar /> */}
      {isLoading && <Loader />}
      <AllRoutes />
    </div>
  );
}

export default App;
