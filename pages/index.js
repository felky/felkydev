import Head from 'next/head'
import Footer from '../components/footer'
import Menu from '../components/menu.js'
import './_app.js'

export default function Home() {
  return (
  <div>
    <div className="container">
      <Head>
        <title>home@felkan</title>
      </Head>
      <main>
        <img src="/face.png" alt="face of felkan" className="face"/>
        <h1>felix gramell</h1>
        <Menu />
      </main>     
      <Footer /> 
    </div>
  </div> 
  )
}
