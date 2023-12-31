// const { Component } = require("react");
import Layout from "../components/Layout";
import { UserProvider } from "./UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
export default MyApp;
