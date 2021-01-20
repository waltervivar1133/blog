import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

interface Props {
  
}

const SocialSideBar: React.FC = (props: Props) => {
  return (
    <div className="hidden lg:flex lg:flex-col mx-auto place-content-around justify-start mt-20 ml-4 mr-10 ">
      <div className="space-y-8">
        <AiFillTwitterCircle size='2.2rem' color="#fff"/>
        <AiFillInstagram size='2.2rem' color="#fff"/>
        <AiFillFacebook size='2.2rem' color="#fff"/>
      </div>
      <div className="h-10"></div>
      <div className="space-y-8 ">
        <div className="w-6 h-6 rounded-full bg-white"/>
        <div className="w-5 h-5 rounded-full bg-white"/>
        <div className="w-3 h-3 rounded-full bg-white"/>
        <div className="w-2 h-2 rounded-full bg-white"/>
      </div>
    </div>
  )
}

export default SocialSideBar
