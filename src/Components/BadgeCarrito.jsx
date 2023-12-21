import { Avatar, AvatarBadge, Badge, Text } from "@chakra-ui/react";
import imagenCarrito from '/img/carrito.png'
export const BadgeCarrito = ({value}) => {
  return (
    <Avatar src={imagenCarrito}>
    <AvatarBadge width='1.3em' bg='teal.500'>
      <Text fontSize={'xs'} color={'white'}>{value}</Text>
    </AvatarBadge>
  </Avatar>
  );
};

