import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import * as web3 from "@solana/web3.js"

export default function Home() {
  // @ts-expect-error
  globalThis.web3 = web3;
  console?.clear();

  return (
    <>
      <Head>
        <title>Solana/web3.js sandbox</title>
        <meta name="description" content="Use at your own risk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by opening the Console and typing&nbsp;
            <code className={styles.code}>web3</code>
          </p>
        </div>
      </main>
    </>
  )
}
