import styled from 'styled-components'

export const Container = styled.div`
header{ 
  padding:24px;
  border-bottom:1px solid #e2e2e2;
}
`

export const HeaderContent = styled.div`
max-width:1120px;
margin:0 auto;
display:flex;
justify-content: space-between;
align-items:center;
>div{
  display:flex;
  gap:16px;
  
  button{
    height:45px;
  }
}
>img{
  max-height:45px;
}
`
export const LogOutButton = styled.button`
  border:0;
  background:transparent;
  cursor: pointer;
  display: flex;
  align-items:center;
  transition: filter 0.2s;
  color:#835afd;

  >svg{
    height:24px;
    width:24px;
  }
  &:hover{
    filter: brightness(0.9)
  }
`
export const MainContent = styled.main`
max-width:800px;
margin:0 auto;
form{
  textarea{
    width:100%;
    border:0;
    padding:16px;
    border-radius:8px;
    background:#fefefe;
    box-shadow: 0 2px 12px rgba(0,0,0 0.04);
    resize:vertical;
    min-height:130px;
  }
}

`
export const RoomTitle = styled.div`
margin:32px 0 24px;
display:flex;
align-items:center;
h1{
  font-family:'Poppins', sans-serif;
  font-size:24px;
  color:#29292E;
}
span{
  margin-left:16px;
  background:#e559f9;
  border-radius:9999px;
  padding:8px 16px;
  color:#fff;
  font-weight:500;
  font-size:14px;
}
`



export const QuestionList = styled.div`
  margin-top:32px;
`