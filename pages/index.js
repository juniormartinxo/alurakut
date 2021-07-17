import React, { useState } from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from '../src/lib/AluraKutCommons';

function ProfileSideBar(props) {
  return (
    <Box as='aside'>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        alt={props.githubUser}
      />
      <hr />
      <p>
        <a href={`https://github.com/${props.githubUser}`} className='boxLink'>
          @{props.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const [comunidades, setComunidades] = useState([
    {
      id: new Date().toISOString(),
      title: 'Eu Sou Amazônia',
      image:
        'https://organicsnewsbrasil.com.br/wp-content/uploads/2017/07/eu-sou-amazonia.jpg',
    },
    {
      id: new Date().toISOString(),
      title: 'Vacina sim!',
      image: 'https://i.ytimg.com/vi/CAjYjv7824I/maxresdefault.jpg',
    },
    {
      id: new Date().toISOString(),
      title: 'Vidas Negras Importam',
      image: 'https://pbs.twimg.com/media/EZcX9GsXsAkMiRU.png',
    },
    {
      id: new Date().toISOString(),
      title: 'Devs Cansados',
      image:
        'https://pbs.twimg.com/profile_images/1144273965873094661/pZFmxzzF.jpg',
    },
    {
      id: new Date().toISOString(),
      title: 'Javascript Brasil',
      image:
        'https://user-images.githubusercontent.com/25904662/44163790-b496f580-a09a-11e8-9a5a-3c2394ab5af6.jpg',
    },
    {
      id: new Date().toISOString(),
      title: 'ReactJS Brasil',
      image:
        'data:image/jpeg;base64,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',
    },
  ]);

  const githubUser = 'juniormartinsdev';
  const pessoasFavoritas = [
    'juunegreiros',
    'peas',
    'omariosouto',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];

  function actionCriarComunidade(e) {
    e.preventDefault();

    const dadosForm = new FormData(e.target);
    const comunidade = {
      id: new Date().toISOString(),
      title: dadosForm.get('title'),
      image: dadosForm.get('image'),
    };

    if (comunidades.length <= 5) {
      const comunidadesAtualizadas = [...comunidades, comunidade];

      setComunidades(comunidadesAtualizadas);
    }
  }

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className='title'>
              Bem vindo(a) <br />
              <small>Chupa Facebook!</small>
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className='smallTitle'>O quê você deseja fazer?</h2>

            <form onSubmit={actionCriarComunidade}>
              <div>
                <input
                  type='text'
                  placeholder='Qual vai ser o nome da sua comunidade?'
                  name='title'
                  aria-label='Qual vai ser o nome da sua comunidade?'
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Coloque uma url para usarmos de capa'
                  name='image'
                  aria-label='Coloque uma url para usarmos de capa'
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>

        <div
          className='profileRelationsArea'
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Minhas comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map(comunidade => {
                return (
                  <li key={comunidade.id}>
                    <a href={`/users/${comunidade.title}`} key={comunidade.id}>
                      <img src={comunidade.image} alt={comunidade.title} />
                      <span>{comunidade.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Meu amigos ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map(pessoa => {
                return (
                  <li key={pessoa}>
                    <a href={`/users/${pessoa}`} key={pessoa}>
                      <img
                        src={`https://github.com/${pessoa}.png`}
                        alt={pessoa}
                      />
                      <span>{pessoa}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
