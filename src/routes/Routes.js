import { Routes, Route } from "react-router-dom";
import * as pathName from "./paths";
import AxiosExample from "./../pages/AxiosExample/AxiosExample";
import FetchExample from "./../pages/FetchExample/FetchExample";
import GraphQlExample from "./../pages/GraphQlExample/GraphQlExample";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={pathName.axiosExample} element={<AxiosExample />} />
      <Route path={pathName.fetchExample} element={<FetchExample />} />
      <Route path={pathName.graphQlExample} element={<GraphQlExample />} />
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
};

export default AppRoutes;
