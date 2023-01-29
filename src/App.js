import React from "react";
import "./App.css";
import Form from "./components/form";

const App = () => {
  return (
    <div className="app bg-dark-subtle">
      <div className="container d-flex justify-content-center ">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-3 ">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
