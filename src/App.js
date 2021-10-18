// import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Searchbar from "./components/Searchbar";
import MainSection from "./components/MainSection";
import CompanySection from "./components/CompanySection";

function App() {
  const [jobsArray, setJobsArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [skip, setSkip] = useState(0);
  // const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="App">
        <Container>
          <Link to={`/`}>
            <h1 className="mt-5 text-align-center">Gimme a Job</h1>
          </Link>
          <Searchbar
            setJobsArray={setJobsArray}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            skip={skip}
          />
          <Route
            path="/"
            exact
            render={() => (
              <MainSection
                jobsArray={jobsArray}
                searchQuery={searchQuery}
                skip={skip}
                setSkip={setSkip}
              />
            )}
          />
          <Route path="/company-detail/:company" component={CompanySection} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
