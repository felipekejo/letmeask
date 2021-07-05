import { ReactNode } from "react";
import { Container, UserInfo, ButtonsContainer } from "./styles";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
}

export function Question({ content, author, children, isHighlighted = false, isAnswered = false }: QuestionProps) {
  return (
    <Container className={`${isAnswered ? 'answered' : ''} ${isHighlighted && !isAnswered ? 'highlighted' : ''}`}>
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <ButtonsContainer>
          {children}
        </ButtonsContainer>
      </footer>
    </Container>
  )
}