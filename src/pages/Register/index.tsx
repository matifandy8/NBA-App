import { Box, ButtonGroup, Radio,Text,Stack } from "@chakra-ui/react";
import { Formik } from "formik";
import {
  InputControl,
  PercentComplete,
  ResetButton,
  SubmitButton,
} from "formik-chakra-ui";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const Register = () => {

let history = useHistory();

const onSubmit = (values: any) => {
  console.log(values);
  window.alert(JSON.stringify(values, null, 2));
  history.push("/login");

};

const initialValues = {
  firstName: "",
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
});

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors }) => (
        <Box
        minW={{ base: "90%", md: "468px" }}
          p={6}
          m="10px auto"
          as="form"
          onSubmit={handleSubmit as any}
        >
           <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
          <Text fontSize="4xl">Register</Text>
          <InputControl name="firstName" label="First Name" />
          <InputControl name="email" label="Email" />
          <InputControl name="password" label="Password" />
          <ButtonGroup>
            <SubmitButton>Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>
          </Stack>
        </Box>
      )}
    </Formik>
  );
};

export default Register;

