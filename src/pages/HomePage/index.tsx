import illustrationImg from '../../assets/illustration.svg'
import logoImg from '../../assets/logo.svg'
import googleIconImg from '../../assets/google-icon.svg'
import { Container, MainContent, Separator, CreateRoomButton } from './styles'
import { Button } from '../../components/Button'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'



export function HomePage() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()


  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')


  }

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

          <CreateRoomButton onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo Google" />
            Crete a room with Google Account
          </CreateRoomButton>
          <Separator>or enter in a room</Separator>
          <form>
            <input type="text" placeholder="Enter the room code" />
            <Button type="submit">Enter the room</Button>
          </form>
        </MainContent>
      </main>
    </Container>
  )
}