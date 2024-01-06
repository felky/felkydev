import Head from 'next/head'
import './_app.js'

export default function Work() {
  return (
    <div>
        <div className="container">
        <Head>
            <title>contact@felkan</title>
        </Head>

            <main>
                <h1>contact</h1>
                <p>i usually answer within a day :)</p>
                <a href="mailto:felix@gramell.se">email here</a>
            </main>      
        </div>
    </div>
  )
}