import RestaurantCard from '../../components/Restaurant'

import { ListContainer } from './styles'

type Props = {
  restaurants: Restaurants[]
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const RestaurantsList = ({ restaurants }: Props) => {
  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ListContainer className="containerLarge">
        {[...restaurants]
          .sort((a, b) => (b.destacado ? 1 : -1))
          .map((r) => (
            <RestaurantCard
              key={r.id}
              name={r.titulo}
              highlight={r.destacado || false}
              description={r.descricao}
              infos={capitalizeFirstLetter(r.tipo)}
              image={r.capa}
              rating={r.avaliacao}
              link={`/restaurants/${r.id}`}
            />
          ))}
      </ListContainer>
    </>
  )
}
export default RestaurantsList
