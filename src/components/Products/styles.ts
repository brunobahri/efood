import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductItem = styled.li`
  background-color: ${cores.vermelho};
  padding: 8px;
  color: ${cores.bege};
  max-width: 320px;
  margin-bottom: 32px;
  position: relative;

  @media (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 670px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin-top: 8px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 30px;
    margin-top: 10px;
    position: relative;
  }

  a {
    position: absolute;
    bottom: 5px;
    border-radius: 16px;
  }
`