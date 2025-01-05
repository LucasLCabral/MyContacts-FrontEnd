import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "../../components/ContactForm/ContactForm";


export default function NewContact() {
  return(
    <>
      <PageHeader
        title="Novo Contato"
      />

      <ContactForm
      buttonLabel="Cadastrar"/>
    </>
  );
}
