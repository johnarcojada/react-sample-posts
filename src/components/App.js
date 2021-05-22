import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../global-styles'

import TheSidebar from './TheSidebar'

const Layout = styled.div`
 display: grid;
 grid-template-columns: repeat(12, minmax(0, 1fr));
`

function App() {
  return (
    <>
      <Layout>
        <TheSidebar />
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
