import { Avatar, AvatarBadge, Badge, Text } from "@chakra-ui/react";

export const BadgeCarrito = ({value}) => {
  return (
    <Avatar src='/img/carrito.png'>
    <AvatarBadge width='1.3em' bg='teal.500'>
      <Text fontSize={'xs'} color={'white'}>{value}</Text>
    </AvatarBadge>
  </Avatar>
  );
};

