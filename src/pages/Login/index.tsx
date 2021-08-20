import { Box, ButtonGroup,Text,Stack } from "@chakra-ui/react";
import { Formik } from "formik";
import {
  InputControl,
  ResetButton,
  SubmitButton,
} from "formik-chakra-ui";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { postLogin } from "../../services/User";
import { FormValues } from "../../interfaces";


const Login: React.FC = () => {

let history = useHistory();

const onSubmit = async (values: FormValues) => {
  console.log(values);
  window.alert(JSON.stringify(values, null, 2));
  history.push("/");
  const resp = await postLogin(values)
  console.log(resp)
  localStorage.setItem('userInfo', JSON.stringify(resp.data));
  // let token = data.token;
};

const initialValues: FormValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
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
          <Text fontSize="4xl">Sign In</Text>
          <InputControl name="email" label="Email" />
          <InputControl name="password" label="Password" />
          <ButtonGroup>
            <SubmitButton>Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
            <Text>Don`t have a account?<Link to="/register"> Create</Link></Text>
          </ButtonGroup>
          </Stack>
        </Box>
      )}
    </Formik>
  );
};

export default Login;

