import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddEmployer from "./pages/AddEmployer";
import Homepage from "./pages/Homepage";
import DeletedEmployers from "./pages/DeletedEmployers";

function App() {
  return (
    <Router>
      <main className="py-3">
        <Container>
          <Route path="/" component={Homepage} exact />

          <Route path="/deleted-employees" component={DeletedEmployers} exact />
          <Route path="/add-employer" component={AddEmployer} exact />
          <Route path="/edit-employer" component={DeletedEmployers} exact />
        </Container>
      </main>
    </Router>
  );
}

export default App;
