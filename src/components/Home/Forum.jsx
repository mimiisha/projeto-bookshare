// components/Forum.jsx
import React, { useState } from 'react';

const Forum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Como parar de me comparar com a vida dos influencers?",
      content: "Eu sinto que minha vida é tão sem graça perto do que eu vejo nas redes. Alguma dica para me sentir melhor?",
      likes: 12,
      liked: false
    },
    {
      id: 2,
      title: "Dicas para dormir melhor sem o celular",
      content: "Estou com muita dificuldade para largar o celular antes de dormir. Alguém tem alguma dica que realmente funcione?",
      likes: 25,
      liked: false
    },
    {
      id: 3,
      title: "O que vocês fazem para se desconectar de verdade?",
      content: "Queria ideias de atividades offline para me manter ocupado. Já tentei ler, mas logo volto para o celular.",
      likes: 8,
      liked: false
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  const handleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id 
        ? { ...post, likes: post.likes + 1, liked: true }
        : post
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newPost = {
        id: posts.length + 1,
        title: "Novo post",
        content: newMessage,
        likes: 0,
        liked: false
      };
      setPosts([newPost, ...posts]);
      setNewMessage('');
    }
  };

  return (
    <section id="forum" className="bg-white p-8 rounded-xl shadow-md mb-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Fórum de Discussão (Simulado)</h2>
      <p className="mb-6">Leia o que outras pessoas estão pensando sobre desconexão.</p>
      
      <div id="forum-posts" className="space-y-6 mt-8">
        {posts.map(post => (
          <div key={post.id} className="post bg-gray-100 p-6 rounded-lg text-left">
            <h4 className="text-xl font-medium text-[#5A7E7B] mb-2">{post.title}</h4>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="post-actions flex items-center gap-4 text-sm text-gray-600">
              <button
                className={`like-btn flex items-center gap-1 ${post.liked ? 'text-red-500' : 'text-gray-600'}`}
                onClick={() => !post.liked && handleLike(post.id)}
                disabled={post.liked}
              >
                <span>❤️</span>
                <span>{post.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div id="forum-input" className="mt-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            id="forum-message-box"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escreva sua mensagem..."
            className="w-full p-4 border border-gray-300 rounded-lg resize-y min-h-24"
          />
          <button
            type="submit"
            className="bg-[#5A7E7B] text-white px-6 py-3 rounded-full font-bold self-center transition-transform hover:translate-y-[-2px] active:translate-y-0"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Forum;