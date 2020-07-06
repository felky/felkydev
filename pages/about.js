import Head from 'next/head'
import Link from 'next/Link'

import './_app.js'

export default function About() {
  return (
    <div>
    <div className="container">
    <Head>
        <title>about@felkan</title>
    </Head>

      <main>
        <h1>about me</h1>
        <p>
            i'm a 20 year old webdev from sweden
            <br/>
            mechanical keyboard enthusiast 
            <br/>
            lover of the jamstack
            <br/>
            check out my <span><Link href="work"><a>work</a></Link></span> here
        </p>
      </main>      
    </div>
    </div>
  )
}