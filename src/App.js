import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar';
import NewsCard from './components/NewsCard/NewsCard';
import { NewsContent } from './components/NewsContent/NewsContent';
import apikey from './data/config'//alwasy keep apikey in secret folder

function App() {

  // console.log(process.env);

  const [category, setCategory] = useState('general')
 
  // News array
  const [newsArray, setNewsArray] = useState([])

  // News results
  const [newsResults, setNewsResults] = useState([])

  //Load More
  const [loadmore, setLoadmore] = useState(10)
  
  const newsAPI = async() => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadmore}`)
      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)
    } catch (error) {
      console.log(error) 
    }
  }

  useEffect(() => {
    newsAPI()
  }, [newsResults,category,loadmore])
  

  return (
    <div className="App">

      {/* Sending setCategory */}
      <NavBar setCategory={setCategory}/> 
      <NewsContent 
      loadmore = {loadmore}
      setLoadmore = {setLoadmore}
      newsArray={newsArray} 
      newsResults ={newsResults} />
      <Footer  />
    </div>
  );
}

export default App;
