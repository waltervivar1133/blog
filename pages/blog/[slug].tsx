import { GetStaticProps } from 'next';
import React , {useState} from 'react';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import { Client } from '../../config/prismic-configuration';
import Prismic from 'prismic-javascript'
import {Link , RichText} from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import NotFound from '../NotFound';


interface Props {
  post : Ipost
}


const Index: React.FC<Props> = ({post}) => {

  if(!post) return <NotFound/>
  // console.log(post);
  
  const published = new Date(post.last_publication_date);
  return (
    <div>
      <DefaultLayout>
        <div className="px-5 flex flex-col-reverse lg:flex-row ">
          <div className="lg:w-2/4 ">
            <p className="text-white text-lg "> Escrito por :<span className="text-secondary"> Walter</span></p>
            <h3 className="text-white text-4xl">{post.data.title[0].text}</h3>
            
            <div className="space-y-3">
              <p className="text-white post-content ">
              {RichText.render(post.data.body)}
              </p>
            
             
            </div>
            <p className="text-secondary text-lg"> {published.getDay()}/ {published.getMonth()} / {published.getFullYear()}</p>
          </div>
          <div className="lg:ml-10 ">
            <div className="rounded-xl bg-white max-w-lg sticky top-2">
              <img src={post.data.image.url} className="rounded-xl" alt={post.data.image.alt}/>
            </div>
          </div>
         
        </div>
      </DefaultLayout>
    </div> 

    
  )
}

export async function getStaticPaths() {

  const response = await Client().query(

    Prismic.Predicates.at('document.type', 'blogpost'),
    { orderings : '[my.blogpost.date desc]'}

  )

  const paths = response.results.map(posts => ({params : {slug: posts.uid}}));

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps : GetStaticProps = async (context) => {
  try {
    const {slug} = context.params;
    const response = await Client().getByUID('blogpost', slug as string , null ) 

    // console.log('response from prismic', response);

    return{
      props: {
        post: response
      }
    }
  } catch (error) {
    console.log(error);
    return{
      props: {
        post: null
      }
    }
  }
  
}

export default Index; 