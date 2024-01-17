import {
  HeaderContainer,
  Hero,
  LinkRestaurantes,
  Header,
  HeroContainer,
  Overlay
} from './styles'
import eFoodLogo from '../../assets/images/logo.png'
import { capitalizeFirstLetter } from '../../components/Restaurant'

export type Props = {
  name: string
  category?: string
  imagem?: string
}

const HeaderProducts = ({ imagem, category, name }: Props) => (
  <>
    <Header>
      <HeaderContainer className="containerLarge">
        <LinkRestaurantes to={'/'}>Restaurantes</LinkRestaurantes>
        <h1>
          <img src={eFoodLogo} alt="" />
        </h1>
        <p>0 produto(s) no carrinho</p>
      </HeaderContainer>
    </Header>
    <Hero style={{ backgroundImage: `url(${imagem})` }}>
      <Overlay>
        <HeroContainer className="containerLarge">
          <p>{capitalizeFirstLetter(category!)}</p>
          <h2>{name}</h2>
        </HeroContainer>
      </Overlay>
    </Hero>
  </>
)
export default HeaderProducts
