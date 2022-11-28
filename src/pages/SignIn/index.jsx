import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Background, Container, Form } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu Login</h2>
        <Input icon={FiMail} placeholder="E-mail" type="text" />
        <Input icon={FiLock} placeholder="Senha" type="password" />

        <Button title="Entrar" />
        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
