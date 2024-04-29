import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";

const ImageSearch = ({searchText}) => {
    const [text,setText]=useState("")
    console.log(text);
    function onSubmit(e){
        e.preventDefault();
        searchText(text)

    }
  return (
    <div>
    <div className="relative text-lg  text-white">
        <form onSubmit={onSubmit}>
        <div className="flex items-center border-b border-b-2 border-black py-2 ml-96 mr-96">
	        <input className="mt-8 text-black bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none placeholder-white" type="text" placeholder="Type Picture Here ..."onChange={e=>setText(e.target.value)}/>
	        <button type="submit" className="absolute right-96 top-0 mt-12 ">
            <FaSearch />
	        </button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default ImageSearch
