import { GetStaticProps } from 'next'
import Prismic from 'prismic-javascript'
import React from 'react'
import { isContext } from 'vm'
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import PostGrid from '../../components/layouts/home/PostGrid'
import { Client } from '../../config/prismic-configuration'


interface Props {
  posts : Ipost[]
}

const blog: React.FC<Props>= ({posts}) => {
  return (
    <div>
      <DefaultLayout>
        <section>
            <div className="px-8 ">
              <PostGrid posts={posts}/>
            </div>
            
          </section>
      </DefaultLayout>
    </div>
  )
}

export const getStaticProps : GetStaticProps = async (context) => {
  try {
    const response = await Client().query(

      Prismic.Predicates.at('document.type', 'blogpost'),
      { orderings : '[my.blogpost.date desc]'}

    )

    // console.log('response from prismic', response);

    return{
      props: {
        posts: response.results
      }
    }
  } catch (error) {
    console.log(error);
    return{
      props: {
        posts: []
      }
    }
  }
  
}

export default blog
