import { Box, ButtonGroup,Text,Stack } from "@chakra-ui/react";
import { Formik } from "formik";
import {
  InputControl,
  ResetButton,
  SubmitButton,
} from "formik-chakra-ui";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { postRegister } from "../../services/User";

const Register: React.FC = () => {

let history = useHistory();

const onSubmit  = async (values: any) => {
  console.log(values);
  history.push("/login");
  const resp = await postRegister(values)
  console.log(resp.data)

};

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required(),
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
          <InputControl name="name" label="Name" />
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

