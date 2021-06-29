import illustrationImg from '../../assets/illustration.svg'
import logoImg from '../../assets/logo.svg'

import { Container, MainContent } from './styles'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
// import { useAuth } from '../../hooks/useAuth'



export function NewRoom() {
  // const { user } = useAuth()

  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="Illustration symbolizing Q&amp;A" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Answer your audience's questions in real-time</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="LetMeAsk" />
          <h2>Create a new room</h2>

          <form>
            <input type="text" placeholder="Room's name" />
            <Button type="submit">Create a room</Button>
          </form>
          <p>Would you like to enter a different room? <Link to="/">Click here</Link> </p>
        </MainContent>
      </main>
    </Container>
  )
}