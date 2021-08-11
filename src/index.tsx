import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme  } from "@chakra-ui/react"

const colors = {
  brand: {
    100: "#FFFFFF", // White
    200: "#C9082A", //Red
    300: "#051c2d", //Blue
  }
};

const theme = extendTheme({ colors })



ReactDOM.render(
  <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
