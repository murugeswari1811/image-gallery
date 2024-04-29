import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <section className=" dark:bg-gray-900" style={{backgroundImage:"url('https://tutorials-cdn.pixelmator.com/gradient-tool/top.jpg')"}}>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="ml-8 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Search Your Favourite Images...</h1>
            <a className="mt-12 ml-16 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            <Link to="/app">Get started</Link>
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a className="bg-black inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-pink-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Go to Image Gallery...!
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://kinsta.com/wp-content/uploads/2020/04/WordPress%20Photo%20Gallery%20Plugin.jpg" alt="mockup"/>
        </div>                
    </div>
</section>
      
    </div>
  )
}

export default Home
