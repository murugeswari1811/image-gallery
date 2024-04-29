import { useState ,useEffect} from 'react'
import './App.css'
import ImageCard from './components/imageCard';
import ImageSearch from './components/imageSearch';

function App() {
  const [images,setImages]=useState([]);
  const [isLoading,setIsLoading]=useState(true)
  const [term,setTerm]=useState("")
  const api_key="43627703-5cfab78b2a3eacb1113f9fef9"

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${api_key}&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
  },[term])
  return (
    <>
    <div className="container mx-auto" style={{backgroundImage:"url('https://tutorials-cdn.pixelmator.com/gradient-tool/top.jpg')"}}>
      <ImageSearch searchText={(text)=>setTerm(text)}/>
      {
        !isLoading && images.length===0 &&  <h1 className="text-5xl text-center mx-auto mt-32">No Images Found...</h1>
      }

      {isLoading? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>:<div className="grid grid-cols-3 gap-4">
        {images.map((image)=>(
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
    </>




  )
}

export default App
