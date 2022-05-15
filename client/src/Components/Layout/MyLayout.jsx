import "../../App.css";

import React from "react";
import { Layout } from "antd";

import HeaderMain from "../../Containers/Header/HeaderMain.jsx";
import SiderDrawer from "../../Containers/SiderDrawer/SiderDrawer.jsx";
import MainContent from "../../Containers/MainContent/MainContent.jsx";

import { Redirect } from 'react-router-dom';

// import LoadSpin from '../../Components/Spinner/LoadSpin.jsx';

// const HeaderMain = React.lazy(() =>
//   import('../../Containers/Header/HeaderMain.jsx')
// );
// const SiderDrawer = React.lazy(() =>
//   import('../../Containers/SiderDrawer/SiderDrawer.jsx')
// );
// const MainLayout = React.lazy(() =>
//   import('../../Containers/MainLayout/MainLayout.jsx')
// );

function MyLayout() {
  return window.localStorage.getItem("_tkn_") ? (
    <Layout style={{ backgroundColor: "#fafafa", height: "100%" }} width={100}>
      <HeaderMain />
      <SiderDrawer />
      <MainContent />
    </Layout>
  ) : (
    <Redirect to="/login" />
  );
}

export default MyLayout;
