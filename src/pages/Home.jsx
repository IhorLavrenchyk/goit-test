import { HomeWrap, Title } from '../Components/SharedLayout/SharedLayout.styled';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeWrap>
        <Title>Welcome to the TweetStats</Title>
      </HomeWrap>
    </HelmetProvider>
  );
};

export default Home;
