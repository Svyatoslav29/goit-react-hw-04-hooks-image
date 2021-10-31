import React, { useState, useEffect } from 'react';
import Button from './components/button/Button';
import ImageGallery from './components/imageGallery/ImageGallery';
import Loader from './components/loader/Loader';
import Searchbar from './components/searchbar/SearchBar';
import pixabayApi from './servicesApi/Api';
// import PropTypes from 'prop-types';

function App() {
  const[query, setQuery] = useState("");
  const[page, setPage] = useState(1);
  const[images, setImages] = useState([])
  const[isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!query) return;
    setIsLoading(true);
    const fetchImages = async () => {
      try {
        const data = await pixabayApi(query, page);
        setImages((images) => [...images, ...data]);
        if (page !== 1) {
          scrollWindow();
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
   }, [page, query]);

   const scrollWindow = () => {
     window.scrollTo({
       top: document.documentElement.scrollHeight,
       behavior: "smooth",
     })
   };

   const loadMore = () => {
     setIsLoading(!isLoading);
     setPage((prev) => prev + 1);
     setIsLoading(isLoading);
   };

   const handleFormSubmit = (query) => {
     setQuery(query);
     setPage(1);
     setImages([]);
   }
   
   const loadMoreImages = images.length > 0 && images.length >= 12;

   return (
     <div>
      <Searchbar onSubmit={handleFormSubmit}/>
      <ImageGallery images={images}/>
      {loadMoreImages && <Button onClick={loadMore} />}
      {isLoading && <Loader />}
     </div>
   )
}

export default App;

