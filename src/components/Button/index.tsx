import { ButtonHTMLAttributes } from 'react'
import { ContainerButton } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}


export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ContainerButton
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}