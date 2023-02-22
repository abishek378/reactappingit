import { useState } from 'react';
import './App.css';
import Acomponent from './component/Acomponent';
import Bcomponent from './component/Bcomponent';
import Ccomponent from "./component/Ccomponent";
import Fcompo from './component/Fcompo';

function App() {
  const name="lokesh";


  // const obj = [
  //   {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  //   },
  //   {
  //     "userId": 1,
  //     "id": 2,
  //     "title": "qui est esse",
  //     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  //   },
  //   {
  //     "userId": 1,
  //     "id": 3,
  //     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  //     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  //   },
  //   {
  //     "userId": 1,
  //     "id": 4,
  //     "title": "eum et est occaecati",
  //     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  //   },
  //   {
  //     "userId": 1,
  //     "id": 5,
  //     "title": "nesciunt quas odio",
  //     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  //   },
  //   {
  //     "userId": 1,
  //     "id": 6,
  //     "title": "dolorem eum magni eos aperiam quia",
  //     "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  //   }]

    
  //   const nbj =obj.map((e)=>{
  //     return  e.id;
      
  // })


  const [pat,setPat]=useState("");


  const receivefun=(e)=>{
    const data = e;
    console.log(data)
    setPat(data)
  }



  return (
    <div className="App">
     <Acomponent name={name} psyk="proppp from parent"/>


    {/* <p>{nbj}</p> */}
     <Bcomponent func={receivefun}/>
     <p>here we getting data from child [from b compo to app.js]-- {pat} </p>
     <h1>{pat}</h1>
     {/*<Ccomponent/>
           <div id="pfcompo">
          <Fcompo isrc="https://m.media-amazon.com/images/I/31qeR3U2bdL._SY445_SX342_QL70_FMwebp_.jpg" brand="Apple" model="iphone 14 pro max " rate="1,43,899" offer="1,21,999" os="ios"/>
                <Fcompo isrc="https://m.media-amazon.com/images/I/31qeR3U2bdL._SY445_SX342_QL70_FMwebp_.jpg" brand="Apple" model="iphone 14 pro max " rate="1,43,899" offer="1,21,999" os="ios"/>
                <Fcompo isrc="https://m.media-amazon.com/images/I/31qeR3U2bdL._SY445_SX342_QL70_FMwebp_.jpg" brand="Apple" model="iphone 14 pro max " rate="1,43,899" offer="1,21,999" os="ios"/>
                <Fcompo isrc="https://m.media-amazon.com/images/I/41lJ5mDeVaL._SX300_SY300_QL70_FMwebp_.jpg" brand="Realme" model="realme10" rate="20,881" offer="16,881" os="Android 12.0"/>
                <Fcompo isrc="https://m.media-amazon.com/images/I/418tZAs0QzL.jpg" brand="Realme" model="realme10 pro" rate="24,881" offer="20,881" os="Android 13.0"/>
                <Fcompo isrc="https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg" brand="Oneplus" model="11 5g" rate="63,899" offer="61,999" os="Oxygen os"/>
                <Fcompo isrc="https://m.media-amazon.com/images/I/31qeR3U2bdL._SY445_SX342_QL70_FMwebp_.jpg" brand="Apple" model="iphone 14 pro max " rate="1,43,899" offer="1,21,999" os="ios"/>
                <Fcompo isrc="https://m.media-amazon.com/images/I/31qeR3U2bdL._SY445_SX342_QL70_FMwebp_.jpg" brand="Apple" model="iphone 14 pro max " rate="1,43,899" offer="1,21,999" os="ios"/>
                
                <Fcompo isrc="https://m.media-amazon.com/images/I/31qeR3U2bdL._SY445_SX342_QL70_FMwebp_.jpg" brand="Apple" model="iphone 14 pro max " rate="1,43,899" offer="1,21,999" os="ios"/>
                <Fcompo isrc="https://m.media-amazon.com/images/I/31qeR3U2bdL._SY445_SX342_QL70_FMwebp_.jpg" brand="Apple" model="iphone 14 pro max " rate="1,43,899" offer="1,21,999" os="ios"/>
                <Fcompo isrc="https://m.media-amazon.com/images/I/31qeR3U2bdL._SY445_SX342_QL70_FMwebp_.jpg" brand="Apple" model="iphone 14 pro max " rate="1,43,899" offer="1,21,999" os="ios"/>
                
          </div> */}
    </div>
  );
}

export default App;
