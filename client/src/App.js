import { useQuery } from '@apollo/client'
import { GET_POSTS } from './queries'

import AddComment from './components/AddComment'

const App = () => {
  const { loading, error, data } = useQuery(GET_POSTS)

  if (loading)
    return (
      <div className='spinner-border text-secondary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    )

  return (
    <div className='container my-5'>
      {data.posts.map((post, index) => (
        <div key={index}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>

          {post.comments.map(comment => (
            <p>
              <strong>{comment.author}: </strong> {comment.text}
            </p>
          ))}

          <AddComment />
        </div>
      ))}
    </div>
  )
}

export default App
