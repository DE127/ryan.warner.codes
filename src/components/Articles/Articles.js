import React from 'react'

import * as S from './styles'
import { Article, Width } from 'components'

export default ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Width>
      <S.ArticlesComponent>
        <S.Title>Articles</S.Title>
        <ul>
          {posts.map(({ node: post }) =>
            <li key={post.id}>
              <Article {...post} />
            </li>
          )}
        </ul>
      </S.ArticlesComponent>
    </Width>
  )
}