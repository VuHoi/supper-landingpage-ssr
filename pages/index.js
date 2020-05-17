import Head from 'next/head'
import Nav from '../components/Nav'

export default function Home() {
  console.log(process.env.TEST_VAR)
  return (
    <div className="container app">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
    <p>Hello, I'm the index page</p>
    </div>
  )
}
