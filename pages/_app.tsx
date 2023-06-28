import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Noto_Sans } from 'next/font/google';
import { Provider } from 'react-redux';
import AlertComponent from "@/components/AlertComponent";
import store from '@/store';

const notoSans = Noto_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

export default function App({Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <main className={notoSans.className}>
      <Provider store={store}>
        <Component {...pageProps} />
        <AlertComponent />
      </Provider>
    </main>
  );
}
