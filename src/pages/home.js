import { Container, Image, Row } from "react-bootstrap";

import everlootrouwen from "../images/everlootrouwen.jpg";
import schuurtjeeverloo from "../images/schuurtjeeverloo.jpg";

function Home() {
  return (
    <div>
      <div className="bg"></div>
      <Container>
        <Row>
          <Image width={600} height={400} src={everlootrouwen} thumbnail />
          <Image width={600} height={400} src={schuurtjeeverloo} thumbnail />
        </Row>
      </Container>
    </div>
  );
}
export default Home;
