import {
  Container, Header, ListContainer, Card
} from "./styles";

import { FaArrowUp } from "react-icons/fa6";
import { PiNotePencilLight, PiTrashSimple } from "react-icons/pi";

export default function ContactList(){
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href="">Novo Contato</a>
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
              <a href="/">
                <PiNotePencilLight className="edit"/>
              </a>
              <button type="button">
                <PiTrashSimple className="trash"/>
              </button>
            </div>
          </Card>

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
              <a href="/">
                <PiNotePencilLight className="edit"/>
              </a>
              <button type="button">
                <PiTrashSimple className="trash"/>
              </button>
            </div>
          </Card>
          
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
              <a href="/">
                <PiNotePencilLight className="edit"/>
              </a>
              <button type="button">
                <PiTrashSimple className="trash"/>
              </button>
            </div>
          </Card>
      </ListContainer>
    </Container>
  );
};

