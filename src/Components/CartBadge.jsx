import { Avatar, AvatarBadge, Badge, Box, Circle, Text } from "@chakra-ui/react";

export const CartBadge = () => {
  return (
    <Avatar src='/img/carrito.png'>
      <AvatarBadge width='1.3em' bg='teal.500'>
        <Text fontSize={'xs'} color={'white'}>3</Text>
      </AvatarBadge>
    </Avatar>
  );
};