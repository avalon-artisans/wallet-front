import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

export default function App({Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <main className={notoSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
