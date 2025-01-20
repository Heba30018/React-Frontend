import axios from 'axios'
import React,{ useEffect, useState} from 'react'



function UseEffectEx() {

 const [news, setNews] = useState([])
 const getnews = async ()=>{
    const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b77e6da50701480a93eccfcada84aee1')
    setNews(res.data.articles)
 }
 useEffect(()=>{
    getnews()
 },[])
 


  return (
    <section className='container py-5'>
        {
            news.map((obj)=>(
            
                    <div className='card mb-2 p-3'>
                        <div className='row'>
                            <div className='col-2'>
                                <img src={obj.urlToImage} alt='' className='w-100'/>
                            </div>
                            <div className='col-10'>
                                <h2>{obj.title}</h2>
                                <p>{obj.description}</p>
                            </div>
                        </div>
                    </div>
                
            ))


        }
    </section>


  )
}

export default UseEffectEx