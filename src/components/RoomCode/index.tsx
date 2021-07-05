import { ButtonRoomCode } from "./styles";
import copyImg from '../../assets/copy.svg'

type RoomCodeProps = {
  code: string
}
export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <ButtonRoomCode onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="copy room code" />
      </div>
      <span>Room {props.code}</span>
    </ButtonRoomCode>
  )
}