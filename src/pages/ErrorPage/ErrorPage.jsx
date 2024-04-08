import { Bottle, Container } from "../Signup/Signup.styled";
import { Text, Span } from "./ErrorPage.styled";

const NotFoundPage = () => (
  <Container>
    <Text> So Sorry!  Page temporarily unavailable...</Text>
        <Bottle />
        <Span>Please, try again later</Span>
  </Container>
);

export default NotFoundPage;