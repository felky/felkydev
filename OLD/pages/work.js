import Head from 'next/head'
import Gallery from '../components/gallery'
import './_app.js'

export default function Work() {
  return (
    <div>
        <div className="container">
        <Head>
            <title>work@felkan</title>
        </Head>

            <main>
                <h1>work</h1>
                <Gallery />
            </main>      
        </div>
    </div>
  )
}