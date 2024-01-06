import Head from 'next/head'
import Link from 'next/link'

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
            Swedish full-stack developer.
            <br/>
            Mostly .NET and Angular things. 
        </p>
      </main>      
    </div>
    </div>
  )
}