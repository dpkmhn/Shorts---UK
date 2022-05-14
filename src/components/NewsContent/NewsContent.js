import { Container } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

export const NewsContent = ({ newsArray, newsResults, loadmore,setLoadmore }) => {
  return (
    <div>
      {/* Container mui class maxwidth pushes to center */}
      <Container maxWidth="md">
        <div className="content">

          {newsArray.map((newsItem) => (
            <NewsCard newsItem = {newsItem} key={newsItem.title} />  
            ))}

           {
             loadmore <= newsResults && (
              <>
                <hr/>
                <button className="loadMore" onClick = {() => setLoadmore(loadmore + 20)}> Load More</button>
              </>
             )
           }
 
 
        </div>
      </Container>
    </div>
  );
};
