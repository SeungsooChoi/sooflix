import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Component/Section";
import Loader from "Component/Loader";
import Message from "Component/Message";
import Poster from "Component/Poster";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TV Shows | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                imageUrl={tv.poster_path}
                title={tv.original_name}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                imageUrl={tv.poster_path}
                title={tv.original_name}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                imageUrl={tv.poster_path}
                title={tv.original_name}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#e74c3c" />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
