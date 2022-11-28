import { Container } from "./styles";
import { Tag } from "../../components/Tag";
import { Score } from "../../components/Score";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Score score={4} />
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
