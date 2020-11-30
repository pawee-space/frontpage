import {
  BoardContainer, Filter, SearchInput, InputsContainer, Posts,
} from '@styles/pages/home';
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';

import PostPreview from '../../components/PostPreview';

export default function Board() {
  const options = [
    {
      value: 'cats', label: 'Gatos', color: '#00B8D9', isFixed: true,
    },
    { value: 'dogs', label: 'Cachorros', color: '#0052CC' },
    {
      value: 'birbs', label: 'Pássaros', color: '#5243AA', isDisabled: true,
    },
  ];
  return (
    <BoardContainer>
      <InputsContainer>
        <SearchInput>
          <FiSearch />
          <input type="text" placeholder="Pesquisar postagem..." />
        </SearchInput>
        <Filter>
          <FiFilter />
          <p>Filtrar</p>
          <FiChevronDown />
        </Filter>
      </InputsContainer>

      <h1>Mural de postagens</h1>

      <Posts>
        <PostPreview
          title="Titulo da postagem"
          description="Descrição da postagem, descrição da postagem e descrição da postagem, fim. Pawee Space é incrível, melhor aplicativo e afins."
          link="/ong/seila"
          image="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80"
          ongName="Nome da Ong"
          ongImage="https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          ongAddress="Salvador, Ba"
          postedAt="semana passada"
          tags={['cachorros', 'sua mae']}
        />
        <PostPreview
          title="Titulo da postagem"
          description="Descrição da postagem, descrição da postagem e descrição da postagem, fim. Pawee Space é incrível, melhor aplicativo e afins."
          link="/ong/seila"
          image="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80"
          ongName="Nome da Ong"
          ongImage="https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          ongAddress="Salvador, Ba"
          postedAt="semana passada"
          tags={['cachorros', 'sua mae']}
        />
        <PostPreview
          title="Titulo da postagem"
          description="Descrição da postagem, descrição da postagem e descrição da postagem, fim. Pawee Space é incrível, melhor aplicativo e afins."
          link="/ong/seila"
          image="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80"
          ongName="Nome da Ong"
          ongImage="https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          ongAddress="Salvador, Ba"
          postedAt="semana passada"
          tags={['cachorros', 'sua mae']}
        />
        <PostPreview
          title="Titulo da postagem"
          description="Descrição da postagem, descrição da postagem e descrição da postagem, fim. Pawee Space é incrível, melhor aplicativo e afins."
          link="/ong/seila"
          image="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80"
          ongName="Nome da Ong"
          ongImage="https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          ongAddress="Salvador, Ba"
          postedAt="semana passada"
          tags={['cachorros', 'sua mae']}
        />
        <PostPreview
          title="Titulo da postagem"
          description="Descrição da postagem, descrição da postagem e descrição da postagem, fim. Pawee Space é incrível, melhor aplicativo e afins."
          link="/ong/seila"
          image="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80"
          ongName="Nome da Ong"
          ongImage="https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          ongAddress="Salvador, Ba"
          postedAt="semana passada"
          tags={['cachorros', 'sua mae']}
        />
        <PostPreview
          title="Titulo da postagem"
          description="Descrição da postagem, descrição da postagem e descrição da postagem, fim. Pawee Space é incrível, melhor aplicativo e afins."
          link="/ong/seila"
          image="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80"
          ongName="Nome da Ong"
          ongImage="https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          ongAddress="Salvador, Ba"
          postedAt="semana passada"
          tags={['cachorros', 'sua mae']}
        />
        <PostPreview
          title="Titulo da postagem"
          description="Descrição da postagem, descrição da postagem e descrição da postagem, fim. Pawee Space é incrível, melhor aplicativo e afins."
          link="/ong/seila"
          image="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80"
          ongName="Nome da Ong"
          ongImage="https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          ongAddress="Salvador, Ba"
          postedAt="semana passada"
          tags={['cachorros', 'sua mae']}
        />
        <PostPreview
          title="Titulo da postagem"
          description="Descrição da postagem, descrição da postagem e descrição da postagem, fim. Pawee Space é incrível, melhor aplicativo e afins."
          link="/ong/seila"
          image="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80"
          ongName="Nome da Ong"
          ongImage="https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          ongAddress="Salvador, Ba"
          postedAt="semana passada"
          tags={['cachorros', 'sua mae']}
        />
        <PostPreview
          title="Titulo da postagem"
          description="Descrição da postagem, descrição da postagem e descrição da postagem, fim. Pawee Space é incrível, melhor aplicativo e afins."
          link="/ong/seila"
          image="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80"
          ongName="Nome da Ong"
          ongImage="https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          ongAddress="Salvador, Ba"
          postedAt="semana passada"
          tags={['cachorros', 'sua mae']}
        />
      </Posts>

    </BoardContainer>
  );
}
