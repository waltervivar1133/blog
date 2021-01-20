import React , {useState} from 'react'
import {GoBookmark} from 'react-icons/go';
import {FiAlignJustify} from 'react-icons/fi';
import Link from 'next/link';
import {useRouter}  from 'next/router';

const Navigator:React.FC = (props) => {

  const [open , setOpen ] = useState(false);
  const router = useRouter()

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  }

  const {asPath} = router;

  // console.log(path)

  return (
    <nav>
      <div className="flex w-full bg-black-bg justify-center items-center">
        <div className="flex-1 flex md:space-x-4 md:items-center">
          <div className="bg-secondary p-4 md:mr-8 "> 
            <GoBookmark 
            className="w-8 h-8"
            color={ 'white'}
           
            />
          </div>
          <div className="hidden md:block text-white ">
            <Link href="/">
              <a 
              className=" px-4 py-2 "
              style={{ borderBottom : asPath === '/' ? '2px solid #EA9E49' : 'none'}}
              >home</a> 
            </Link>
          </div>
          <div className="hidden md:block text-white ">
            <Link href="/blog">
                <a className=" px-4 py-2 "
              style={{ borderBottom : asPath.includes('/blog') ? '2px solid #EA9E49' : 'none'}}
                
                >blog</a>
            </Link>
          </div>
          </div>
        <div className="flex-1 text-center flex justify-center text-primary text-lg md:text-2xl h-8">
          |Blog Walter|
        </div>
        
        <div className="flex-1 flex justify-end md:items-center">
          <div className="p-4 md:hidden h-15">
            <button onClick={toggleNav}>
              <FiAlignJustify 
              color={'white'}
              size={32}
              />
            </button>
            
          </div>
          <div className="hidden"> 
            <div className="text-white leading-8 pr-5">Perla Pipol</div>
              <div className="flex pr-4">
                <img className="w-8 h-8 rounded-full" src="images/avatar.png" alt=""/>
              </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center bg-dark-blue w-full text-center h-screen  " style={{  display: open ? '' : 'none' }}>
        <div className="flex flex-col text-lg text-white space-y-2 divide-y p-4 ">
          <Link href="/"><a>Home</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigator
