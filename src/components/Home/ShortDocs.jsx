// components/ShortDocs.jsx
import React from 'react';

const ShortDocs = () => {
  const videos = [
    { title: "Como o Algoritmo Funciona", id: "dQw4w9WgXcQ" },
    { title: "A Economia da Atenção", id: "k-fC9NfXQ9U" },
    { title: "Ex-funcionários de Big Tech", id: "CmtwX_wBwYI" },
    { title: "Dopamina e Redes Sociais", id: "0w4pP13Jt8Y" }
  ];

  return (
    <section id="short-docs" className="bg-white p-8 rounded-xl shadow-md mb-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Biblioteca de "Short Docs"</h2>
      <p className="mb-6">Vídeos curtos para entender a ciência por trás do mundo digital.</p>
      
      <div className="video-grid grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {videos.map(video => (
          <div key={video.id} className="video-container bg-gray-100 p-4 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium mb-2">{video.title}</h4>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 rounded"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShortDocs;