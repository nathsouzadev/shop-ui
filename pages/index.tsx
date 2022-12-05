import { CardProduct } from '../components/CardProduct/CardProduct';
import { Container } from '@chakra-ui/react';
import { Header } from '../components/Header/Header';

export default function Home() {
  return (
    <Container minW='100%'>
      <Header />
      <CardProduct 
        src='./assets/produtos/arsenal.jpg'
        alt='Arsenal 2020/21'
        nameProduct='Arsenal 2020/21'
        price={450}
      />
    </Container>
  );
}
