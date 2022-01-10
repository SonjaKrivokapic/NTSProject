import React from 'react';
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
    <main className="py-3">
      <Container>
        
          
          <Route path="/" component={Homepage} exact />
        
          <Route path="/add-employee" component={AddEmployee} exact />

        
        
      </Container>
    </main>
  
  </Router>
  );
}

export default App;
