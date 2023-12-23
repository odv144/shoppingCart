import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import imgFormulario from "/img/formulario3.jpg?url";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";

const schemaVal = Yup.object().shape({
  nombre: Yup.string()
    .min(2, "Demasiado corto")
    .max(50, "Demasiado largo")
    .required("Requirido"),
  apellido: Yup.string()
    .min(2, "Demasiado corto")
    .max(50, "Demasiado largo")
    .required("Requirido"),
  telefono: Yup.number()
    .integer()
    .required()
    .positive("Solo números positivos"),
  email: Yup.string().required().email("Correo invalido"),
  mensaje: Yup.string()
  .min(2, "Demasiado corto")
  .max(1000, "Demasiado largo")
  .required("Requirido"),
  
});

const Contacto = () => {
  const navigator=useNavigate()
  const initial = {
    nombre: "Omar Dario",
    apellido: "virli",
    telefono: "3482558453",
    email: "omar.virli@gmail.com",
    mensaje: "Estoy praticaondo reac",
    
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const enviarDatos = (values, { resetForm }) => {
    console.log(values);
    e.prevenDefault()
    // navigator('/envio')
    // onOpen();
    // onClose(resetForm((values = { initial })));
  };

  return (
    <Formik
      initialValues={initial}
      validationSchema={schemaVal}
      onSubmit={enviarDatos}
    >
      {({ errors, touched, values }) => (
        <Flex
          justify="space-around"
          flexDirection={{ base: "column", sm: "column", md: "row" }}
        >
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent borderRadius="15px">
              <ModalHeader
                fontSize="1.5rem"
                textAlign="center"
                bg="blue.300"
                borderRadius="15px 0px "
                textShadow="2px 2px 2px white"
              >
                Envio de Datos
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  <strong>Nombre:</strong> {values.nombre}
                </Text>
                <Text>
                  <strong>Apellido:</strong> {values.apellido}
                </Text>
                <Text>
                  <strong>Telefono:</strong> {values.telefono}
                </Text>
                <Text>
                  <strong>E-Mail: </strong>
                  {values.email}
                </Text>
                <Text>
                  <strong>Mensaje: </strong>
                  {values.mensaje}
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                 <NavLink to={'/envio'}>Confirmar Envio</NavLink> 
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Box w={["90vw", "90vw", "40vw"]} m="5px 10px" textAlign="center">
            <Form>
              <Field name="nombre">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.nombre && form.touched.nombre}
                  >
                    <FormLabel htmlFor="nombre">Nombre</FormLabel>
                    <Input
                      {...field}
                      id="nombre"
                      placeholder="Ingrese Nombre"
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="apellido">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.apellido && form.touched.apellido}
                  >
                    <FormLabel htmlFor="apellido">Apellido</FormLabel>
                    <Input
                      {...field}
                      id="apellido"
                      placeholder="Ingrese Apellido"
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormErrorMessage>{form.errors.apellido}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="telefono">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.telefono && form.touched.telefono}
                  >
                    <FormLabel htmlFor="telefono">Teléfono</FormLabel>
                    <Input
                      {...field}
                      id="telefono"
                      placeholder="telefono"
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormErrorMessage>{form.errors.telefono}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="email"
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='mensaje'>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.mensaje && form.touched.mensaje}>
                  
                  <FormLabel htmlFor ='mensaje'>Mensaje</FormLabel>
                  <Textarea
                     {...field}
                      id="mensaje"
                      placeholder="Mensaje"
                      focusBorderColor="rgba(0,0,0,0.04)">
                 
                  </Textarea>
                </FormControl>
              )}
             </Field>
            
              <Button type="submit" onClick={onOpen} p="2px 30px" m="10px 10px">
                Enviar
              </Button>
              <Button type="reset" p="2px 30px" m="10px 10px">
                Limpiar{" "}
              </Button>
            </Form>
          </Box>
          <Box w={["100vw",'70vw',"40vw"]} pt="10px" opacity="0.4" display='flex'
          >
            <Image src={imgFormulario} borderRadius="25%" m={{base:'5 15px',sm:'5px 25px'}} justifyItems='center'/>
          </Box>
        </Flex>
      )}
    </Formik>
  );
};

export default Contacto;
