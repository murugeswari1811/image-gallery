import React from 'react'

const ImageCard = ({image}) => {
    const tags=image.tags.split(",")
  return (
    <div className="border-2 border-black border-solid ml-4 mt-12 max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
    <img src={image.webformatURL} alt="loading" className="border-8 border-black border-solid ml-10 mt-8 h-[250px] w-[300px]" />
    <div className="px-2 py-2">
      <div className="text-center font-bold text-xl text-purple-600">Photo by {image.user}</div>
        <ul className='text-center mt-2'>
          <li>
            <strong>Views: </strong>{image.views}
          </li>
          <li>
            <strong>Downloads: </strong>{image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>{image.likes}
          </li>
          
        </ul>
    </div>
    <div className="px-4 py-4 text-center">
        {tags.map((tag,index)=>(
            <span key={index} className="inline-block bg-black rounded-full px-1 py-1 text-sm font-semibold text-white ml-4">#{tag}</span>
        ))}
    </div>
  </div>
  )
}

export default ImageCard
