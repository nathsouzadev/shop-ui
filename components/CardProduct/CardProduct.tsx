import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';

interface ICardProduct {
  nameProduct: string,
  price: number,
  alt: string,
  src: string
}

export const CardProduct = ({ nameProduct, price, alt, src }: ICardProduct) => {
  return(
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={src}
          alt={alt}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nameProduct}</Heading>
          <Text fontSize='md'>R$ {price.toFixed(2)}</Text>
        </Stack>
      </CardBody>
    </Card>
  )
};
