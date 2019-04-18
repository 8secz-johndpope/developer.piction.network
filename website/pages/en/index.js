/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const SplashContainer = props => (
  <div className="homeContainer" style={{backgroundImage: "linear-gradient(135deg,#2e2e2e 60%,#0045e3 0)", color: 'white', minHeight: "300px"}}>
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div>
      <SplashContainer>
        <h1>Piction Network</h1>
      </SplashContainer>
      <Container padding="all">
        <GridBlock
          align="center"
          layout="threeColumn"
          contents={[
            {
              title: `Learn`,
              content: 'Learn how to use this project',
            },
            {
              title: 'Frequently Asked Questions',
              content: 'Questions gathered from the community',
            },
            {
              title: 'More',
              content: 'Lots of documentation is on this site',
            },
          ]}
        />
      </Container>
    </div>
  )
}

module.exports = Index;
