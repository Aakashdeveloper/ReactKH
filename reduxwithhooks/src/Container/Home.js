import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsSelectors } from '../Redux/newsData';
import { 
    getLatestNews,
    getArticleNews,
    getGalleryNews
 } from '../Services/getNewsData';
import LatestDisplay from '../Component/Home/LatestNews';
import ArticleDisplay from '../Component/Home/ArticleDisplay';
import GalleryDisplay from '../Component/Home/GalleryDisplay';


const Home = () => {

    const dispatch = useDispatch();

    const latestNewsList = useSelector(
        newsSelectors.getLatestNews
    )

    const articleNewsList = useSelector(
        newsSelectors.getArticleNews
    )

    const galleryNewsList = useSelector(
        newsSelectors.getGalleryNews
    )

    useEffect(() => {
        dispatch(getLatestNews())
        dispatch(getArticleNews())
        dispatch(getGalleryNews())
    },[])

    return(
        <>
            <LatestDisplay ldata={latestNewsList?.data}/>
            <ArticleDisplay adata={articleNewsList?.data}/>
            <GalleryDisplay gdata={galleryNewsList?.data}/>
        </>
    )
}

export default Home;