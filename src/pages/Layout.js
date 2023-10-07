import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <nav class="">
        TO-DO: add a navbar
      </nav> */}
      <Outlet />
    </>
  )
};

export default Layout;