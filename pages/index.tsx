import Head from 'next/head'
import PostCard from '../components/posts/PostCard';
import {BiPaperPlane } from 'react-icons/bi';
import PostGrid from '../components/layouts/home/PostGrid';
import DefaultLayout from '../components/DefaultLayout/DefaultLayout';
import Prismic from 'prismic-javascript';
import { GetStaticProps } from 'next';
import { Client } from '../config/prismic-configuration';


interface Prop{
  posts: Ipost[]
}


const  Home = ({ posts }) => {

  const first  = posts[0]
  return (
    
      <DefaultLayout>
        <main>
          <section className=" md:w-full lg:flex py-5 mb-12  lg:items-center">
          <div className="flex-1">
            <h1 className="text-white text-4xl font-bold mb-4  lg:mb-8"
            style={{ textShadow: '0px 10px 50px rgba(255,255,255,0.45)'}}>Bienvenido a mi blog!</h1>
            <div className="bg-primary mb-8  hidden lg:block " style={{ height:5}}></div>
            <div style={{ color: 'rgba(206,206,206,0.5)'}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit libero dolore, alias incidunt vero culpa dicta nam, quam natus excepturi accusamus perspiciatis illum tenetur eaque a modi, earum quod. Illo.
            </div>
            <div className="hidden lg:block">
              <h3 className="text-2xl text-white my-8">Registrate para mas contenido</h3>
              <div className="flex space-x-2">
                <div style={{ backgroundColor: '#252d40'}} className="px-12 py-2 rounded-full">
                <input type="text" className="text-white focus:outline-none focus:border-transparent" placeholder="escribe tu email aqui" style={{ backgroundColor: '#252d40'}} />
                </div>
                <div>
                  <a href="/">
                  <div className="w-12 h-12  rounded-full bg-primary flex justify-center items-center" > 
                    <BiPaperPlane color="white" size="1.5rem"/>
                  </div>
                  </a>
                </div>
            </div>
            </div>
          </div>
          <div className=" hidden sm:flex sm:flex-col items-center flex-1">
            <h4 className="text-center text-2xl text-white mb-4">Entradas Recientes</h4>
            <div className="mx-4">
              <PostCard post ={first}/>
            </div>  
          </div>
          </section>
          <section className="sm:hidden">
            <h4 className="text-center text-2xl text-white mb-4">Entradas Recientes</h4>
            <div className="mx-4">
              <PostCard post ={first}/>
            </div>  
          </section>
          <section>
            <div className="px-8 ">
              <PostGrid posts={posts}/>
            </div>
            
          </section>
        </main>
      </DefaultLayout>
    
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

export default Home;
