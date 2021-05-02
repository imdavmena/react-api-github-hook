import React, { Suspense, lazy, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

import GlobalStyle from "./styles/global";

export const App = () => {
  const NotFound = lazy(() => import("./components/notFound"));
  const DefaultPage = lazy(() => import("./Views/DefaultPage"));
  const DetailsUser = lazy(() => import("./Views/DetailsUser"));

  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Layout>
                <DefaultPage />
              </Layout>
            </Route>
            <Route path="/details/:username">
              <Layout>
                <DetailsUser />
              </Layout>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
};

export default App;
