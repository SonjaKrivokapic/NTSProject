import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddEmployer from "./pages/AddEmployer";
import Homepage from "./pages/Homepage";
import DeletedEmployers from "./pages/DeletedEmployers";
import EditEmployer from "./pages/EditEmployer";

function App() {
  return (
    <Router>
      
        <Container>
          <Route path="/" component={Homepage} exact />
          {/* Display Paginated list of Employees */}
          <Route path="/deleted-employees" component={DeletedEmployers} exact />
          {/* Deleted Employees(On different page list ) */}
          <Route path="/add-employer" component={AddEmployer} exact />
          {/* Add Employee */}
          <Route path="/edit-employer/:id" component={EditEmployer} exact />
          {/* Update Employee */}
        </Container>
      
    </Router>
  );
}

export default App;
