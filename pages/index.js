import Head from 'next/head'
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
    // console.log(props);
  return (
    <div >
      <Head>
        <title>huluclone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <Navbar/>
        <Results results={results}/>
    </div>
  )
}
export async function getServerSideProps(context) {
    const category = context.query.category;
    const request = await fetch(
        `https://api.themoviedb.org/3${
            requests[category]?.url || requests.Trending.url
        }`
    ).then((res)=>res.json());

    return {
        props: {
            results: request.results
        }
    }

}