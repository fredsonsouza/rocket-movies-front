import { Container, Content, Brand, Search, Profile } from "./styles";
import { Input } from "../Input";
export function Header() {
  return (
    <Container>
      <Content>
        <Brand>
          <h1>RocketMovies</h1>
        </Brand>
        <Search>
          <Input placeholder="Pesquisar título"></Input>
        </Search>
        <Profile to="/profile">
          <div>
            <strong>Fredson Souza</strong>
            <span>Sair</span>
          </div>
          <img
            src="https://github.com/fredsonsouza.png"
            alt="Foto do usuário"
          />
        </Profile>
      </Content>
    </Container>
  );
}
