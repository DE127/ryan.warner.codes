
import styled from 'styled-components'

import { Colors } from 'styles'
import { Link } from '../'

export const ArticleComponent = styled.div`
  max-width: 630px;
`

export const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 14px;
  margin-top: 18px;
`

export const Date = styled.time`
  font-size: 14px;
  color: ${Colors.blue50};
  margin-top: 3px;
  display: block;
`

export const Description = styled.p``

export const ReadMore = styled(Link)`
  color: ${Colors.blue50};
  margin-top: 25px;
  display: block;
`