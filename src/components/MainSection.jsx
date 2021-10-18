import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Dropdown,
  FormControl,
  InputGroup,
  DropdownButton,
} from "react-bootstrap";

const MainSection = ({ jobsArray }) => {
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [skip, setSkip] = useState(0);
  //   const [jobsArray, setJobsArray] = useState([]);
  //   const [searchParameter, setSearchParameter] = useState("Search");

  return (
    <div>
      {/* {console.log(jobsArray.data)} */}
      <Container>
        <h2>Jobs</h2>
        <Row className="border">
          {/* <Row border="primary"> */}
          <Col xs={4}>
            <h2>Role</h2>
          </Col>
          <Col xs={4}>
            <h2>Company</h2>
          </Col>
          <Col xs={4}>
            <h2>Categories</h2>
          </Col>
        </Row>
        {jobsArray.map((job) => (
          <Row key={job._id} className="border">
            <Col xs={4} className="border pt-3">
              <h4> {job.title}</h4>
            </Col>
            <Col xs={4} className="border pt-3">
              <Link to={`/company-detail/${job.company_name}`}>
                <h4>{job.company_name}</h4>
              </Link>
            </Col>
            <Col xs={4} className="border pt-3">
              <h4> {job.category}</h4>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default MainSection;
