import React from 'react';
import { useAppContext } from '../context/context';
import "./css/listNews.css";

function NewsList() {
    const { news } = useAppContext();
  console.log(news)
    return (
        <div>
            {news && news.map((noti, index) => {
                return (
                    <div key={noti.article_id} className='news__container'>
                        <h1 className='news__title'>{noti.title}</h1>
                        <p className='news__content'>{noti.description}</p>
                        <picture><img src={`${noti.image_url}`} alt="imageNoti" className='news__img'/></picture>
                        <a href={noti.link} target='_blank' className='news__url'><button className='goSite'>Puede revisar la nota completa haciedo click aquí</button></a>
                    </div>
                );
            })}
        </div>
    );
}

export default NewsList;
