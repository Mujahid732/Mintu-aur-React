import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Coffee(){
  return(
    <h1>coffee is ready ...</h1>
  );
}

const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'click me to visit google'
}

const anotherElement = (
  <a href="https://google.com" target="_blank">visitgoogle</a>
)

const reactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',
    target: '_blank'
  },
  'click me to visit'

  
)

createRoot(document.getElementById('root')).render(

  <Coffee />
   
)
