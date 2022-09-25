import Head from "next/head";
import React from "react";
import Header from "../components/Header"
Head;
const Search = () => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header /> 
      {/* search results */}
    </div>
  );
};

export default Search;
