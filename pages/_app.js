//import '../styles/global_styles.scss'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import { useDarkMode } from '../themes/darkMode';
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../themes/theme'
import { GlobalStyles } from '../themes/global'

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Rakkas&display=swap' rel="stylesheet"  />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>

      <div class="layout">
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
            </ThemeProvider>
            <Link href="/"><a className="homeButton" style={{textDecoration: 'none'}}>🏠</a></Link>
            <Link href=""><a className="darkMode" onClick={toggleTheme} style={{textDecoration: 'none'}}>
              { theme === "light" ? '🌛' : '🌞'}
            </a></Link>
      </div>
      <Component {...pageProps} />
    </div>
  ) 

}

export default MyApp