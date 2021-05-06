import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'black'
  },
  headSection: {
    background: 'url(black-leaf-background.jpg)',
    backgroundSize: '100%'
  }
}))

import Header from '../src/components/header/header';
import SearchBarContainer from '../src/components/search-bar-container/search-bar-container';
import MovieResultsContainer from '../src/components/movie-results-container/movie-results-container';

export default function Home() {
  const classes = useStyles(); 
  return (
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>
      <div className={classes.headSection}>
        <Header/>
        <SearchBarContainer/>
      </div>
      <MovieResultsContainer/>
    </div>
  )
}
