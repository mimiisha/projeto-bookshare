import { useState } from 'react';

const AnalogMap = () => {
  const [selectedActivity, setSelectedActivity] = useState('');

  const islands = [
    { 
      id: 1, 
      activity: "Desenhe a capa do seu próximo álbum imaginário.", 
      bgColor: "bg-blue-200" 
    },
    { 
      id: 2, 
      activity: "Ligue para um amigo e converse sobre algo nada digital.", 
      bgColor: "bg-green-200" 
    },
    { 
      id: 3, 
      activity: "Pratique 10 minutos de alongamento.", 
      bgColor: "bg-yellow-200" 
    },
    { 
      id: 4, 
      activity: "Leia um capítulo de um livro.", 
      bgColor: "bg-purple-200" 
    },
    { 
      id: 5, 
      activity: "Ajude em alguma tarefa doméstica.", 
      bgColor: "bg-pink-200" 
    }
  ];

  const handleIslandClick = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <section id="analog-map" className="bg-white p-8 rounded-xl shadow-md mb-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Mapa de Ideias Analógico</h2>
      <p className="mb-6">Explore ilhas de inspiração para atividades offline. Clique para saber mais.</p>
      
      <div className="map-container flex justify-center gap-6 mt-8 flex-wrap">
        {islands.map(island => (
          <div
            key={island.id}
            className={`island w-20 h-20 rounded-full border-4 border-[#F4C49A] cursor-pointer transition-transform hover:scale-110 ${island.bgColor}`}
            onClick={() => handleIslandClick(island.activity)}
          ></div>
        ))}
      </div>
      
      <div id="island-info" className="mt-4 italic text-gray-600">
        {selectedActivity || "Clique em uma ilha para ver a sugestão."}
      </div>
    </section>
  );
};

export default AnalogMap;