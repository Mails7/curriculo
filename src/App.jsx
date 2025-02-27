import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [pendingComments, setPendingComments] = useState([]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: Date.now(),
        text: comment,
        approved: false,
        author: 'Anônimo',
        timestamp: new Date().toLocaleString(),
      };
      setPendingComments([...pendingComments, newComment]);
      setComment('');
      alert('Comentário enviado para aprovação! Aguarde a revisão.');
    }
  };

  const approveComment = (id) => {
    const commentToApprove = pendingComments.find((c) => c.id === id);
    if (commentToApprove) {
      setComments([...comments, { ...commentToApprove, approved: true }]);
      setPendingComments(pendingComments.filter((c) => c.id !== id));
      alert('Comentário aprovado e publicado!');
    }
  };

  const rejectComment = (id) => {
    setPendingComments(pendingComments.filter((c) => c.id !== id));
    alert('Comentário rejeitado.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://qcmptpioeppfyvachhln.supabase.co/storage/v1/object/sign/curriculo/photo_2023-04-23_19-00-21.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdXJyaWN1bG8vcGhvdG9fMjAyMy0wNC0yM18xOS0wMC0yMS5qcGciLCJpYXQiOjE3NDA2MDk5NzksImV4cCI6MTc3MjE0NTk3OX0.ZJHfxE5YhBdx9WVnvKPPfXBLgeU9rfF8m1TxiZKS_dw"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Maílson Alves dos Santos
              </h1>
              <h2 className="text-xl text-blue-200 mb-4">
                Assistente de Projetos em Engenharia
              </h2>
              <p className="text-blue-100 max-w-xl">
                Estou em busca de uma oportunidade no mercado onde eu possa
                aplicar minhas habilidades e contribuir de forma eficaz com
                equipes de trabalho, priorizando o crescimento da organização e
                o meu desenvolvimento pessoal e profissional.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="mailto:alcance963@gmail.com"
                  className="text-white hover:text-blue-200"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://t.me/@MAIL963?text=Olá%20Mailson,%20vi%20seu%20currículo%20online!"
                  className="text-white hover:text-blue-200"
                >
                  <Send className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Educação</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-900 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Ensino Superior - em pausa
              </h3>
              <p className="text-blue-900 mb-2">
                10º Semestre de Engenharia Civil • UNIP - Brasília - DF • 2020
              </p>
            </div>
            <div className="border-l-4 border-blue-900 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Ensino Médio
              </h3>
              <p className="text-blue-900 mb-2">Concluído • 2008</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Experiência Profissional
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-900 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Assistente de Projetos em Engenharia
              </h3>
              <p className="text-blue-900 mb-2">
                Alcance Engenharia - Brasília - DF • 2021
              </p>
            </div>
            <div className="border-l-4 border-blue-900 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Assistente de Projetos em Engenharia
              </h3>
              <p className="text-blue-900 mb-2">
                Cleiton Alves Engenharia - Brasília - DF • 2020 - 2021
              </p>
            </div>
            <div className="border-l-4 border-blue-900 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Auxiliar de Pré-Impressão
              </h3>
              <p className="text-blue-900 mb-2">
                Editora e Gráfica Coronário - Brasília - DF • 2019 - 2020
              </p>
            </div>
            <div className="border-l-4 border-blue-900 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Designer, Técnico em Impressão Digital e Atendimento
              </h3>
              <p className="text-blue-900 mb-2">
                Art Plus Comunicação Visual - Bom Jesus - PI • 2015 - 2019
              </p>
            </div>
            <div className="border-l-4 border-blue-900 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Departamento de Compras, Almoxarifado
              </h3>
              <p className="text-blue-900 mb-2">
                Fazenda Boa Esperança - Palmeira do Piauí - PI • 2014 - 2015
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'CorelDraw', level: 80 },
              { name: 'Photoshop', level: 60 },
              { name: 'Allplan Enginier', level: 50 },
              { name: 'AutoCad', level: 55 },
              { name: 'Revit', level: 55 },
              { name: 'Adobe Premiere', level: 45 },
              { name: 'Bubble.io', level: 50 },
              { name: 'OutSystems', level: 35 },
              { name: 'Programação', level: 45 },
            ].map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-900 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Projetos</h2>

          {/* Engineering Projects */}
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">Engenharia</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                url: 'https://qcmptpioeppfyvachhln.supabase.co/storage/v1/object/sign/curriculo/bloco%20pedagogico.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdXJyaWN1bG8vYmxvY28gcGVkYWdvZ2ljby5qcGciLCJpYXQiOjE3NDA2MDk4NjIsImV4cCI6MTc3MjE0NTg2Mn0.YkOMGuZ_wj9Mur891BMwYTpsZ-D-YHPtWLwQdybcGsU',
                title: 'Bloco Principal finalizado',
                description: 'Rampa de acesso em concreto armado'
              },
              {
                url: 'https://qcmptpioeppfyvachhln.supabase.co/storage/v1/object/sign/curriculo/mailson.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdXJyaWN1bG8vbWFpbHNvbi5qcGciLCJpYXQiOjE3NDA2MDk3MjYsImV4cCI6MTc3MjE0NTcyNn0.LhVXtJ3m8n9PbAAUg9zGITUO5HzXgYnITo-4_LRpgow',
                title: 'Verificação de Medidas',
                description: 'Conferindo medidas para garantir a exatidão do volume de concreto necessário para a execução da fundação'
              },
              {
                url: 'https://qcmptpioeppfyvachhln.supabase.co/storage/v1/object/sign/curriculo/perfuracoes%20de%20solo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdXJyaWN1bG8vcGVyZnVyYWNvZXMgZGUgc29sby5qcGciLCJpYXQiOjE3NDA2MTAwNDksImV4cCI6MTc3MjE0NjA0OX0.Cpkf-0HwhQdPV7-gnrc79eEqnczih43SCACjE_vVyGs',
                title: 'Croqui de Acompanhamento',
                description: 'Detalhes de acompanhamento de concretagem de laje de grande porte, 42 caminhões de concreto executados no dia'
              },
              {
                url: 'https://qcmptpioeppfyvachhln.supabase.co/storage/v1/object/sign/curriculo/vista%20aerea.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdXJyaWN1bG8vdmlzdGEgYWVyZWEuanBnIiwiaWF0IjoxNzQwNjEwMTAwLCJleHAiOjE3NzIxNDYxMDB9.emfC77p95kOGwKSvXsImGwWmPVyY7Ms9N2YkMf24cpY',
                title: 'Foto Aérea',
                description: 'Vista aérea do canteiro de obras, foto capturada por drone'
              },
              {
                url: 'https://qcmptpioeppfyvachhln.supabase.co/storage/v1/object/sign/curriculo/quadra%20de%20esportes.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdXJyaWN1bG8vcXVhZHJhIGRlIGVzcG9ydGVzLmpwZyIsImlhdCI6MTc0MDYxMDE5MywiZXhwIjoxNzcyMTQ2MTkzfQ.xRM-j_67zxHkVyqusgxvMyh8wPCTKzBvv0b15lMLNmA',
                title: 'Quadra de Esportes Finalizada',
                description: 'Vista aérea do canteiro de obras, foto capturada por drone'
              }
            ].map((project, i) => (
              <div
                key={`eng-${i}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleImageClick(project.url)}
              >
                <img
                  src={project.url}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Programming Projects */}
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">Programação</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                url: 'https://qcmptpioeppfyvachhln.supabase.co/storage/v1/object/sign/curriculo/fun%20maze.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdXJyaWN1bG8vZnVuIG1hemUucG5nIiwiaWF0IjoxNzQwNjEwMzE4LCJleHAiOjE3NzIxNDYzMTh9.IDv1pZWr60ZRY_l4TUeU54x5kTR8q4Hxx8hM0cv5Q8g',
                title: 'Landing Page',
                description: 'Página web para redirecionamento e captação de venda de ebook. Tecnologias: HTML, CSS, JavaScript'
              },
              {
                url: 'https://qcmptpioeppfyvachhln.supabase.co/storage/v1/object/sign/curriculo/tech%20cactus.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdXJyaWN1bG8vdGVjaCBjYWN0dXMuanBnIiwiaWF0IjoxNzQwNjExMzM1LCJleHAiOjE3NzIxNDczMzV9.aAEA0n3qcdfXaUqdOQdIg_dRRfzmlFbukTabeKngZqE',
                title: 'Captura de Clientes',
                description: 'Página web para capturar novos clientes para academia de musculação. Tecnologias: HTML, CSS, JavaScript'
              },
              {
                url: 'https://qcmptpioeppfyvachhln.supabase.co/storage/v1/object/sign/curriculo/program.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdXJyaWN1bG8vcHJvZ3JhbS5qcGciLCJpYXQiOjE3NDA2MTE0OTAsImV4cCI6MTc3MjE0NzQ5MH0.RP0Ua1CD9z5cUoq76bA7OrbXv-wiNW0rduQkq2yOroA',
                title: 'Edição no Código',
                description: 'Imagem no momento da edição do código html do Site CactusTech. Tecnologias: HTML, CSS, JavaScript'
              },
              {
                url: 'https://qcmptpioeppfyvachhln.supabase.co/storage/v1/object/sign/curriculo/bubble.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdXJyaWN1bG8vYnViYmxlLnBuZyIsImlhdCI6MTc0MDYxMjA0MCwiZXhwIjoxNzcyMTQ4MDQwfQ.pom33O0Sn2tz13U1uSuvjcv-CTG9F9Nek87-_VMen6U',
                title: 'Projeto em Execução',
                description: 'Aplicativo web para gerenciamento de escolas em desenvolvimento com Bubble.io e Supabase'
              }
            ].map((project, i) => (
              <div
                key={`prog-${i}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleImageClick(project.url)}
              >
                <img
                  src={project.url}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para visualização da imagem */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-full object-contain"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
            />
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Telegram Button */}
      <a
        href="https://t.me/@MAIL963?text=Olá%20Mailson,%20vi%20seu%20currículo%20online!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
      >
        <Send className="w-5 h-5" />
        <span>Enviar Mensagem</span>
      </a>

      {/* Comments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Comentários</h2>

          {/* Formulário de Comentário */}
          <form onSubmit={handleCommentSubmit} className="mb-8">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Deixe seu comentário aqui..."
              className="w-full p-4 border border-gray-300 rounded-md resize-none h-24 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Enviar Comentário
            </button>
          </form>

          {/* Comentários Aprovados */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Comentários Aprovados
            </h3>
            {comments.length === 0 ? (
              <p className="text-gray-500">Nenhum comentário aprovado ainda.</p>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-md"
                >
                  <p className="text-gray-800">{comment.text}</p>
                  <p className="text-gray-500 text-sm">
                    {comment.author} - {comment.timestamp}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Comentários Pendentes (visíveis apenas para você, o administrador) */}
          {pendingComments.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-700">
                Comentários Pendentes (Aprovação)
              </h3>
              {pendingComments.map((pending) => (
                <div
                  key={pending.id}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-md mt-4"
                >
                  <p className="text-gray-800">{pending.text}</p>
                  <p className="text-gray-500 text-sm">
                    {pending.author} - {pending.timestamp}
                  </p>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => approveComment(pending.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
                    >
                      Aprovar
                    </button>
                    <button
                      onClick={() => rejectComment(pending.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                    >
                      Rejeitar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center py-4 text-gray-500 text-sm">
        Feito com carinho por Mailson Alves, ❤️
      </footer>
    </div>
  );
}

export default App;