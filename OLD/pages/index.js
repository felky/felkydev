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
        <img src="/face.jpg" alt="face of felkan" className="face"/>
        <h1>felix gramell</h1>
        <p>fullstack developer @ <a href="https:/synsam.se">Synsam</a></p>
        <a href="https://www.linkedin.com/in/felix-gramell-440997174">
          <img src="linkedin.png" alt="linkedin logo" className="linkedin"/>
        </a>
      </main>     
      <Footer /> 
    </div>
  </div> 
  )
}
