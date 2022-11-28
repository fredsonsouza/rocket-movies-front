import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Score({ score, isLargeStar }) {
  let stars = [];
  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= score) {
      stars.push(<AiFillStar key={cont} />);
    } else {
      stars.push(<AiOutlineStar key={cont} />);
    }
  }

  return <Container isLargeStar={isLargeStar}>{stars}</Container>;
}
