import { FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Container, Content, Form, Section, Footer } from "./styles";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Form>
            <header>
              <Link to="/">
                <ButtonText icon={FiArrowLeft} title="Voltar" />
              </Link>
              <h1>Novo Filme</h1>
            </header>
            <div>
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </div>
            <TextArea placeholder="Obsevações" />
          </Form>
          <Section>
            <h2>Marcadores</h2>
            <div>
              <NoteItem value="Drama" />
              <NoteItem placeholder="Novo Marcador" isNew />
            </div>
          </Section>
          <Footer>
            <Button title="Excluir Filme" />
            <Button title="Salvar Filme" />
          </Footer>
        </Content>
      </main>
    </Container>
  );
}
