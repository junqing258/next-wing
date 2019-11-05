import React from 'react';
import Head from 'next/head';
// import styled from 'styled-components';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';


function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
    </div>
  )
}

export default IndexPage