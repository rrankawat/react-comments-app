import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query getPosts {
    posts {
      title
      text
      comments {
        author
        text
      }
    }
  }
`
