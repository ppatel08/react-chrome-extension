import React from 'react';
import './App.css';
import Accordion from './Accordion'
import Footer from './Footer'

function App() {
  const products = [
    {
      title: "First Accordion",
      body: "I am just a body hiddent untill someone clicked on me",
      linkUrl: [
        {
          'url': "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg"
        },
        {
          'url': "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg"
        },
      ],
      linktitle: "Google Link"
    },
    {
      title: "Second Accordion",
      body: "I am just a body hiddent untill someone clicked on me",
      linkUrl: [
        {
          'url': "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg"
        }
      ],
      linktitle: "Google Link"
    },
    {
      title: "Third Accordion",
      body: "I am just a body hiddent untill someone clicked on me",
      linkUrl: [
        {
          'url': "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg"
        },
        {
          'url': "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg"
        },
        {
          'url': "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg"
        }
      ],
      linktitle: "Google Link"
    }
  ]

  return (
    <div className="App">
      <div>
        {products.map(product => (
          <Accordion {...product} /> // props are exactly saame name as service
        ))}
      </div>
      <Footer />
    </div >
  );
}

export default App;
