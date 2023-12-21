import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

export const Login = () => {
  const { login } = useContext(LoginContext);
  const [ver, setVer] = useState("password");
  function verClave(event) {
    event.preventDefault();
    ver == "password" ? setVer("text") : setVer("password");
  }
  const [verConf, setVerConf] = useState("password");
  function verClaveConf(event) {
    event.preventDefault();
    verConf == "password" ? setVerConf("text") : setVerConf("password");
  }

  return (
    <Flex justifyContent={"center"} m="20px">
      <Box
        bgColor={"gray.100"}
        p="30px"
        borderRadius={"10px"}
        boxShadow={"2px 2px 1px #999"}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(login);
            if(login.email == values.email && login.pass == values.password)
              {
                alert(JSON.stringify(values, null, 2)); 
                login.validado=true;
              }else{
                alert("Credenciales invalidas");

              }
              console.log(login);
              setSubmitting(true);
            
            // onSubmit={(values, { setSubmitting }) => {
            //   setTimeout(() => {
            //     alert(JSON.stringify(values, null, 2));
            //     setSubmitting(false);
            //   }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email" fontWeight="bold">
                      Email
                    </FormLabel>
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

              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password" fontWeight="bold">
                      Password
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...field}
                        id="password"
                        type={ver}
                        placeholder="password"
                        focusBorderColor="rgba(0,0,0,0.04)"
                      />
                      <InputRightElement>
                        {ver == "password" && (
                          <ViewIcon
                            w="60px"
                            boxSize="20px"
                            mr="2px"
                            color="grey"
                            onClick={verClave}
                          />
                        )}
                        {ver == "text" && (
                          <ViewOffIcon
                            w="60px"
                            boxSize="20px"
                            mr="2px"
                            color="grey"
                            onClick={verClave}
                          />
                        )}
                      </InputRightElement>
                    </InputGroup>

                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                type="submit"
                disabled={isSubmitting}
                colorScheme="teal"
                variant="outline"
                m="10px"
              >
                Verificar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
