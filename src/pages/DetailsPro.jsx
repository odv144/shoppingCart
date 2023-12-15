import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"


export const DetailsPro = () => {
  const cantidad = 2;
  const precio= 3000;
  const total = cantidad * precio;
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />
  
  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
      <Box>{cantidad}</Box>
      <Box>{precio}</Box>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Confirmar Compra
      </Button>
      <Box>Total De la Compra {total}</Box>
    </CardFooter>
  </Stack>
</Card>
  )
}
