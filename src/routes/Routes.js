import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import * as pathName from "./paths";
const AxiosExample = lazy(() => import("./../pages/AxiosExample/AxiosExample"));
const FetchExample = lazy(() => import("./../pages/FetchExample/FetchExample"));
const GraphQlExample = lazy(() => import("./../pages/GraphQlExample/GraphQlExample"));

const AppRoutes = () => {
  return (
    <Routes Suspense={<p>loading</p>}>
      <Route
        path={pathName.axiosExample}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AxiosExample />
          </Suspense>
        }
      />
      <Route
        path={pathName.fetchExample}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <FetchExample />
          </Suspense>
        }
      />
      <Route
        path={pathName.graphQlExample}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <GraphQlExample />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <p>404</p>
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
