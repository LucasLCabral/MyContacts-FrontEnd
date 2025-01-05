import {
  Container, InputSearchContainer, Header, ListContainer, Card
} from "../../pages/Home/styles";

import { FaArrowUp } from "react-icons/fa6";
import { PiNotePencilLight, PiTrashSimple } from "react-icons/pi";

import { Link } from "react-router-dom";

export default function Home(){
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder='Pesquisar Contato...'/>
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
          <header>
            <button type="button" className="sort-button">
              <span>Nome</span>
              <FaArrowUp className="arrow"/>
            </button>
          </header>

          <Card>
            <div className="info">
              <div className="contact-name">
                <strong>Lucas Cabral</strong>
                <small>instagram</small>
              </div>

              <span>lucas@email.com</span>
              <span>(11) 99951-3591</span>
            </div>

            <div className="actions">
              <Link to="/edit/123">
                <PiNotePencilLight className="edit"/>
              </Link>
              <button type="button">
                <PiTrashSimple className="trash"/>
              </button>
            </div>
          </Card>
      </ListContainer>
    </Container>
  );
};
