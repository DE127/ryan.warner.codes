import React from 'react'

import * as S from './styles'

const nav = {
  blog: {
    title: 'Posts',
    url: '/posts'
  },
  snippets: {
    title: 'Snippets',
    url: '/snippets'
  },
  about: {
    title: 'About',
    url: '/about'
  },
  contact: {
    title: 'Contact',
    url: '/contact'
  }
}

export default () =>
  <S.Nav>
    {Object.values(nav).map(item => (
      <S.NavItem href={item.url}>
        {item.title}
      </S.NavItem>
    ))}
  </S.Nav>
