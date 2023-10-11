import * as S from './styles'

type Props = {
  title: string
  description: string
}

const Main = (props: Props) => (
  <S.Wrapper>
    <S.Title>{props.title}</S.Title>
    <S.Description>{props.description}</S.Description>
  </S.Wrapper>
)

export default Main
