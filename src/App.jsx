import { useState } from 'react';
import { returnRandomElements } from './helpers/QuoteMachine';
import { colors, quotes } from './helpers/Quotes';
import './App.css'

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
    let buttons = document.getElementsByClassName('button');
    for(const button in buttons){
      buttons[button].style.backgroundColor = background;
    }

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
    <div id='buttons'>
      <button id='new-quote' className='button' onClick={newQuote}>Get a new Quote</button>
      <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
          >
            <i className="fa fa-twitter"></i>
          </a>
    </div>
    </div>
    </>
  )
}

export default App
