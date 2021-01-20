import React , {useState} from 'react';
import PostCard from '../../posts/PostCard';


const PostGrid: React.FC<{posts : Ipost[]}> = ({ posts}) => {
  return (
    <div>
      <h3 className="text-2xl text-white mb-4">Post Recientes</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {posts.map(( post , index : number ) =>{
          return <PostCard post={post} key={index} />  
          }
          )}
      </div>
    </div> 

    
  )
}

export default PostGrid; 