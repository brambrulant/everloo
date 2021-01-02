import { Image } from "react-bootstrap";
import wandeleneverloo from "../images/wandeleneverloo.jpg";

function Activiteiten() {
  return (
    <div>
      <Image width={600} height={400} src={wandeleneverloo} thumbnail />
    </div>
  );
}

export default Activiteiten;
