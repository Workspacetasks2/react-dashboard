import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./pages/home/Home";
import NewUser from "./pages/new/NewUser";
import List from "./pages/list/List";
import Single from "./pages/snigle/Single";
import { productInputs, userInputs } from "./formSource";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Login />} />
              <Route path="home" element={<Home />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<NewUser inputs={userInputs} title="Add New User" />}
                />
              </Route>

              {/*<Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <New inputs={productInputs} title="Add New Product" />
                  }
                />
                </Route>*/}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
