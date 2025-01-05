import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { FaArrowUp } from "react-icons/fa6";

import { Container } from "./syles";

export default function PageHeader({ title }){
  return (
    <Container>
      <Link to="">
        <FaArrowUp className="arrow"/>
        <span>Voltar</span>
      </Link>

      <h1>{title}</h1>
    </Container>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
