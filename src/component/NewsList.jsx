import React,{useEffect} from 'react'
import { useAppContext } from '../context/context'
function NewsList() {
    const { news, findNews } = useAppContext()
    const newsArticles = news.articles



  return (
    <div>
       {console.log(newsArticles)}
      {newsArticles && newsArticles.map ((noti, index) => {
        return(
        <div key={index}>
            <h1>{noti.title}</h1>
            <p>{noti.content}</p>
            <a href={noti.url} target='_black'>{noti.url}</a>
            <picture><img src={`${noti.urlToImage}`} alt="imageNoti"/></picture>

        </div>
        )
      })}
    </div>
  )
}

export default NewsList
