import React from 'react'
import Card from './Card'
function Post({data}) {
  return (
      <div className='main-content'>
      { data.map((post,index) => {
            
              return <Card
                  key={ index }
                  name={ post.name }
                  location={ post.location }
                  description={ post.description }
                  img={ post.PostImage }
                  likes={ 20 }
                date={new Date(post.createdAt) }

              />
          })
          }
            
    </div>
  )
}

export default Post