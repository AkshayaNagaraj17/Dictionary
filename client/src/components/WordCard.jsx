

import React from 'react';

const WordCard = ({ word }) => (
  <div className="border p-4 rounded shadow">
    <h2 className="text-xl font-semibold">{word.word}</h2>
    <p>{word.definition}</p>
    <img src={word.imageUrl} alt={word.word} className="w-full h-48 object-cover mt-2" />
    <video controls className="w-full mt-2">
      <source src={word.videoUrl} type="video/mp4" />
    </video>
  </div>
);

export default WordCard;