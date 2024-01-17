import { TagContainer } from './styles'
type Props = {
  children: string | boolean | undefined
}

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag
