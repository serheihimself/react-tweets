import { Container, Main } from 'components/Main.styles';
import { Title, LinkBox } from './Home.styles';
export default function Home() {
  return (
    <Container>
      <Main>
        <Title>Welcome to my homepage!</Title>
        <h3>
          If you have any questions you can see the working code on my page
          GITHUB. You can also contact me directly via LINKEDIN - I'm happy to
          help you!
        </h3>
        <LinkBox>
          <a href="https://github.com/serheihimself/react-tweets">Github</a>
          <a href="https://www.linkedin.com/in/serhii-mykhailevych/">
            Linkedin
          </a>
        </LinkBox>
      </Main>
    </Container>
  );
}
