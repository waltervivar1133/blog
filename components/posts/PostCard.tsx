import Link from 'next/link';
import React, { useState } from 'react';
import {AiFillCaretRight} from 'react-icons/ai'

interface Prop {
  post : Ipost
}

const PostCard: React.FC<Prop> = ({post}) =>
{

  const {data} = post;
  return (
<Link href={`/blog/${post.uid}`} >
  <a >
    <div className=" bg-light-bg rounded-xl" style={{ maxWidth: '420px'}}>
      <div className="rounded-xl">
        <img src={data.image.url} className="rounded-xl bg bg-white" alt=""/>
      </div>
      <div>
        <div className="p-4">
          <h5 
          className="text-white text-xl mb-4 font-bold"
          style={{ textShadow: '0px 10px 50px rgba(255,255,255,0.45)'}}>{data.title[0].text}</h5>
          <p className="text-white text-small mb-4">{ data.description[0].text }</p>
          <div className="flex justify-end">
            <div className="bg-secondary w-12 h-12 flex items-center justify-center rounded-full">
              <AiFillCaretRight color ={'white'}/>  
            </div>
          </div>
        </div>
      </div>
    </div>
    </a>
</Link>
  )

}  

export default PostCard;