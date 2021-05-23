import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../global-styles'

import TheSidebar from './TheSidebar'
import ThePhotosGrid from './ThePhotosGrid'

const Layout = styled.div`
 height: 100%;
 display: grid;
 grid-template-columns: repeat(12, minmax(0, 1fr));
`

function App() {
  return (
    <>
      <Layout>
        <ThePhotosGrid gridSpan={9} />
        <TheSidebar gridSpan={3} gridStart={10}/>
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
