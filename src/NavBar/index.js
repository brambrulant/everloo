import { Image, Nav, Navbar } from "react-bootstrap";
import logoEverloo from "../images/logoEverloo.png";
import "./index.css";

function Navings() {
  return (
    <div class="nav-styling">
      <Navbar variant="dark">
        <Navbar.Brand href="home" class="justify-content-end">
          <Image width={100} height={50} src={logoEverloo} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <div class="row">
            <div class="box-c">
              <a href="nieuws" class="custom-underline">
                Niews
              </a>
            </div>

            <div class="box-c">
              <a href="slapen" class="custom-underline">
                Slapen
              </a>
            </div>

            <div class="box-c">
              <a href="feesten" class="custom-underline">
                Feesten
              </a>
            </div>

            <div class="box-c">
              <a href="eten" class="custom-underline">
                Eten
              </a>
            </div>

            <div class="box-c">
              <a href="activiteiten" class="custom-underline">
                Activiteiten
              </a>
            </div>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navings;
