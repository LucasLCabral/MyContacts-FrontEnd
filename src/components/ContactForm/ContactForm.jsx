import { Form, ButtonContainer } from "./styles";

import FormGroup from "../FormGroup/FormGroup";
import Input from "../Input";
import Select from '../Select';
import Button from '../Button'

import PropTypes from "prop-types";

export default function ContactForm({ buttonLabel}){
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="Instagram">Instagram</option>
          <option value="Instagram">Linkedin</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          { buttonLabel }
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}
