import { Container, HeaderContent, MainContent, RoomTitle, QuestionList } from "./styles";

import logoImg from '../../assets/logo.svg'
import deleteImg from '../../assets/delete.svg'
import checkImg from '../../assets/check.svg'
import answerImg from '../../assets/answer.svg'
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import { useHistory, useParams } from "react-router-dom";
// import { useAuth } from "../../hooks/useAuth";

import { Question } from "../../components/Question";
import { useRoom } from "../../hooks/useRoom";
import { database } from "../../services/firebase";





type RoomParams = {
  id: string
}

export function AdminRoom() {
  // const { user } = useAuth()
  const params = useParams<RoomParams>()
  const roomId = params.id
  const history = useHistory()
  const { questions, title } = useRoom(roomId)

  async function handleEndRoom(roomId: string) {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })
    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Are you sure you would like to delete this question?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleMarkQuestionAsAnswered(questionId: string) {

    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })

  }
  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  return (
    <Container>
      <header>
        <HeaderContent>
          <img src={logoImg} alt="Logo" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={() => handleEndRoom(roomId)}>Close room</Button>
          </div>

        </HeaderContent>
      </header>
      <MainContent>
        <RoomTitle>
          <h1>Room {title}</h1>
          {questions.length > 0 && <span>{questions.length} Question(s)</span>}
        </RoomTitle>

        <QuestionList>
          {questions.map(question => {
            return (
              <Question
                content={question.content}
                author={question.author}
                key={question.id}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleMarkQuestionAsAnswered(question.id)}
                    >
                      <img src={checkImg} alt="mark question as answered" />

                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Highlight question" />

                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="delete question" />

                </button>


              </Question>
            )
          })}
        </QuestionList>
      </MainContent>
    </Container>
  )
}