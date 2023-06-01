import { Html, Head, Main, NextScript } from 'next/document'
import AlertComponent from '@/components/AlertComponent';
import store from "@/store";
import {Provider} from "react-redux";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Provider store={store}>
          <Main />
          <AlertComponent />
        </Provider>
        <NextScript />
      </body>
    </Html>
  )
}
