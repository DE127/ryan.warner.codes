import React from 'react'

import * as S from './styles'
import { Nav, SecondaryNav, Width } from '../'

export default ({ location }) =>
  <S.Background>
    <Width>
      <S.Header>
        <S.MainNav>
          <S.Wordmark to='/'>
            <S.StyledHeart />
          </S.Wordmark>
          <Nav location={location} />
        </S.MainNav>
        <SecondaryNav location={location} />
      </S.Header>
    </Width>
  </S.Background>
