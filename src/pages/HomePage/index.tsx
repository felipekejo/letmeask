import illustrationImg from '../../assets/illustration.svg'
import logoImg from '../../assets/logo.svg'
import googleIconImg from '../../assets/google-icon.svg'
import { Container, MainContent, Separator, CreateRoomButton } from './styles'
import { Button } from '../../components/Button'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../../services/firebase'



export function HomePage() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')


  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')


  }
  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()
    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exists.')
      return
    }
    history.push(`/rooms/${roomCode}`)
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
          <form onSubmit={handleJoinRoom} >
            <input
              type="text"
              placeholder="Enter the room code"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Enter the room</Button>
          </form>
        </MainContent>
      </main>
    </Container>
  )
}