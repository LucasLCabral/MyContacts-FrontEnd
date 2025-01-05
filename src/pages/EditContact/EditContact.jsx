import ContactForm from '../../components/ContactForm/ContactForm';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function EditContact(){
  return (
    <>
      <PageHeader
      title="Editar Lucas Cabral"
      />

      <ContactForm
        buttonLabel='Salvar Alterações'
      />
    </>
  );
};
