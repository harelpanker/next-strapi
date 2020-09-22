import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

import Container from '../styles/Container';
import MovieCard from '../components/MovieCard';

function Home({ movies }) {
  console.log(movies);

  return (
    <Container>
      <PageHeader>My Movies</PageHeader>
      <StyledList>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard {...movie} />
          </li>
        ))}
      </StyledList>
    </Container>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  return {
    props: {
      movies: data,
    },
  };
}

const PageHeader = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  font-size: 4rem;
  text-align: center;
  margin: 4rem 0;
`;
const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 1fr;
  gap: 1.5rem;
`;

export default Home;
