import Tag from '../Tag'
import { Card, Infos, Rating, Title, CardDescription, Botao } from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  name: string
  description: string
  image: string
  rating: number
  infos: string
  link: string
}

export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

const RestaurantCard = ({
  name,
  description,
  image,
  rating,
  infos,
  link
}: Props) => (
  <Card>
    <img src={image} alt="teste" />
    <Infos>
      <Tag>{capitalizeFirstLetter(infos)}</Tag>
    </Infos>
    <CardDescription>
      <Title>
        <h2>{name}</h2>
        <Rating>
          {rating}
          <img src={estrela} alt="" />
        </Rating>
      </Title>
      <p>{description}</p>
      <Botao to={link}>Saiba mais</Botao>
    </CardDescription>
  </Card>
)

export default RestaurantCard
