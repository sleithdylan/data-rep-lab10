// Imports React
import React from 'react';

// Exports Content Component
export class Content extends React.Component {
  render() {
    return (
      // <div> has been replaced with a React Fragment
      <>
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </>
    );
  }
}
