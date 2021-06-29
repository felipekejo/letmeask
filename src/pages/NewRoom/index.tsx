import { FormEvent, useState } from 'react'
import illustrationImg from '../../assets/illustration.svg'
import logoImg from '../../assets/logo.svg'

import { Container, MainContent } from './styles'
import { Button } from '../../components/Button'
import { Link, useHistory } from 'react-router-dom'
import { database } from '../../services/firebase'
import { useAuth } from '../../hooks/useAuth'



export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('')
  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()
    if (newRoom.trim() === '') {
      return
    }
    const roomRef = database.ref('rooms')
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })
    history.push(`/rooms/${firebaseRoom.key}`)
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
          <h2>Create a new room</h2>

          <form onSubmit={handleCreateRoom}>
            <input type="text" placeholder="Room's name" onChange={event => setNewRoom(event.target.value)} value={newRoom} />
            <Button type="submit">Create a room</Button>
          </form>
          <p>Would you like to enter a different room? <Link to="/">Click here</Link> </p>
        </MainContent>
      </main>
    </Container>
  )
}