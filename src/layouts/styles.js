import styled from 'styled-components'

import { Width } from 'components'
import { Breakpoints, Colors } from 'styles'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const A = styled.a`
  text-decoration: underline;
`

export const Li = styled.li`
  font-size: 16px;
  margin-bottom: 1rem;
  color: ${Colors.text20};

  @media(min-width: ${Breakpoints.mobile}) {
    font-size: 19px;
  }
`

export const P = styled.p`
  font-size: 16px;
  margin-bottom: 2rem;
  color: ${Colors.text20};

  @media(min-width: ${Breakpoints.mobile}) {
    font-size: 19px;
  }
`

export const Img = styled.img`
  max-width: 100%;
`

export const H2 = styled.h2`
  margin-top: 3rem;

  @media(min-width: ${Breakpoints.mobile}) {
    margin-top: 6rem;
  }
`

export const H3 = styled.h3`
  margin-top: 3rem;

  @media(min-width: ${Breakpoints.mobile}) {
    margin-top: 6rem;
  }
`

export const StyledWidth = styled(Width)`
  margin-bottom: 100px;
`
