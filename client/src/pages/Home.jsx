import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import WordCard from '../components/WordCard';

const Home = () => {
  const [words, setWords] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5009/words')
      .then(res => {
        setWords(res.data);
        setFiltered(res.data);
      });
  }, []);

  const handleSearch = (query) => {
    const result = words.filter(word => word.word.toLowerCase().includes(query.toLowerCase()));
    setFiltered(result);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sign Language Dictionary</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {filtered.map((word, index) => <WordCard key={index} word={word} />)}
      </div>
    </div>
  );
};

export default Home;
