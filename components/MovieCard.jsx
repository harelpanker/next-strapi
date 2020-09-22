import styled from 'styled-components';

const MovieCard = (movie) => {
  const { API_URL } = process.env;

  return (
    <StyledCard>
      <StyledImg
        src={API_URL + movie.poster.url}
        alt={`${movie.title} poster`}
      />
      <StyledBodyWrapper>
        <StyledTitle>{movie.title}</StyledTitle>
        <StyledList>
          {movie.actors.map((actor) => (
            <li key={actor.id}>
              {actor.first_name} {actor.last_name}
            </li>
          ))}
        </StyledList>
        <p>{movie.description}</p>
      </StyledBodyWrapper>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  overflow: hidden;
  border-radius: 7px;
  background-color: ghostwhite;
`;
const StyledImg = styled.img`
  min-width: 330px;
  width: 100%;
  height: 220px;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakepoints.md}) {
    min-width: 230px;
    height: 190px;
  }
`;
const StyledBodyWrapper = styled.div`
  padding: 1rem;
`;
const StyledTitle = styled.h3`
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.blue};
  font-weight: 400;
  font-size: 2rem;
`;
const StyledList = styled.ul`
  list-style-type: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

export default MovieCard;
