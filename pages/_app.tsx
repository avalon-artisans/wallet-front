import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

export default function App({Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className={notoSans.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
