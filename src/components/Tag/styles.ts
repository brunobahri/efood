import styled from 'styled-components'
import { colors } from '../../styles'

export const TagContainer = styled.div`
  background-color: ${colors.red};
  color: ${colors.beige};
  display: inline-block;
  padding: 6px 4px;
  font-size: 14px;
  font-weight: bold;

  &:not(:last-child) {
    margin-right: 8px;
  }
`
