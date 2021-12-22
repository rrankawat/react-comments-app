import { useMutation, gql } from '@apollo/client'
import { GET_POSTS } from '../queries'

const ADD_COMMENT = gql`
  mutation addComment($author: String, $text: String) {
    addComment(author: $author, text: $text) {
      author
      text
    }
  }
`

const AddComment = () => {
  const [addComment, { data }] = useMutation(ADD_COMMENT)

  const onSubmit = e => {
    e.preventDefault()

    const { author, text } = e.target.elements

    if (!author.value || !text.value) {
      return
    }

    addComment({
      variables: { author: author.value, text: text.value },
      refetchQueries: [{ query: GET_POSTS }],
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='mb-3'>
        <input
          type='text'
          name='author'
          placeholder='Author'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <input
          type='text'
          name='text'
          placeholder='Text'
          className='form-control'
        />
      </div>
      <button className='btn btn-secondary'>Add Commnet</button>
    </form>
  )
}

export default AddComment
