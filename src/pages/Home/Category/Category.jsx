import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <div className='m-5'>
                {id && <h2 className='text-2xl font-bold text-center'>This category news: {categoryNews.length}</h2>}
                {
                    categoryNews.map(news => <NewsCard 
                    key={news._id}
                    news={news}></NewsCard>)
                }
            </div>
           
        </div>
    );
};

export default Category;