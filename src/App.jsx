import { useState } from 'react';
import { returnRandomElements } from './helpers/QuoteMachine';
import { colors, quotes } from './helpers/Quotes';
import './App.css';
let selection = returnRandomElements(quotes);
let background= '#242424';


function App() {
  const[option, setOption] = useState(selection);

  const bgColors =()=>{
    let oldBackground = background;
    background = returnRandomElements(colors);
    if(oldBackground === background){
      while(oldBackground === background){
        background = returnRandomElements(colors);}
    }
    document.body.style.backgroundColor = background;
    document.body.style.color=background;
    let quote = document.querySelector('#new-quote');
    let tweet = document.querySelector('.twitter');
    quote.style.color=background;
    tweet.style.color=background;
  }

    const newQuote =()=>{
      let oldSelection = selection;
      selection = returnRandomElements(quotes);
      if(oldSelection.quote === selection.quote){
        while(oldSelection.quote === selection.quote){
          selection = returnRandomElements(quotes);
        }
      }
      setOption(selection);
      bgColors();
    }


  return (
    <>
    <h1 id= 'title'>Quotation Machine</h1>
    <div id='quote-box' >
      <h2 id='text'>{option.quote}</h2>
    <div id = 'data'>
      <h3 id = 'song'> {option.song} -</h3>  
      <h3 id='author'> {option.author} </h3>
    </div>
    </div>
    <div id='buttons'>
      <div id='socials'  
      onClick={()=>{
          let text = document.querySelector('#text');
          let data = document.querySelector('#data');
          let tweetUrl = `https://twitter.com/intent/tweet?url="${text.innerText}"
          ${data.innerText} `;
          window.open(tweetUrl, "_blank");
        }}
      onMouseOver={()=>{
        document.querySelector('#socials').style.backgroundColor=background;
        document.querySelector('.twitter').style.color='#FFFFFF';
        console.log(document.querySelector('.twitter').style.color)
      }}
      onMouseOut={()=>{
        document.querySelector('#socials').style.backgroundColor='#FFFFFF';
        document.querySelector('.twitter').style.color=background;
      }}>
        <a className='twitter' onClick={()=>{
          let text = document.querySelector('#text');
          let data = document.querySelector('#data');
          let tweetUrl = `https://twitter.com/intent/tweet?url="${text.innerText}"
          ${data.innerText} `;
          window.open(tweetUrl, "_blank");
        }}>Tweet</a>
      </div>
      <button id='new-quote' 
      className='button' 
      onClick={newQuote}
      onMouseOver={()=>{
        document.querySelector('#new-quote').style.backgroundColor=background;
        document.querySelector('#new-quote').style.color='#FFFFFF';
      }}
      onMouseOut={()=>{
        document.querySelector('#new-quote').style.backgroundColor='#FFFFFF';
        document.querySelector('#new-quote').style.color=background;
      }}
      >Get a new Quote</button>
    </div>
    </>
  )
}

export default App
