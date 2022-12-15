import React from 'react'
import Card from './Card'
function Post({data}) {
  return (
      <div>
          { data.map(post => {
              return <Card
                  key={ post.id }
                  name={ post.name }
                  location={ post.location }
                  description={ post.description }
                  img={ post.PostImage }
                  likes={ 20 }
                  date={ post.createdAt.toString().split('T')[0] }

              />
          })
          }
            
    </div>
  )
}

export default Post