import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class App extends Component {
  render() {
    const responsiveImage = require('./img/1qa.jpg?placeholder=true&sizes[]=1000,sizes[]=1200,sizes[]=1300');
    const ie = /*@cc_on!@*/false || !!document.documentMode;
    const style = {width: '50%', height: '100vh', overflow: 'hidden'}
    const style1 = {width: '100%', height: '100%', backgroundImage: "url(https://res.cloudinary.com/demo/image/upload/f_auto/seagull.jpg)", backgroundSize: "cover"}
    const style2 = {width: 'auto', height: '100%', backgroundImage: 'url("' + responsiveImage.placeholder + '")', backgroundSize: "cover"}
    const style3 = {width: '100%', height: '100%', backgroundSize: "cover", backgroundImage: "url(https://res.cloudinary.com/dialqb1om/image/upload/v1554966439/f_auto,q_auto,c_crop/1qa.jpg)"}
    const style4 = {width: '100%', height: '100%', backgroundImage: "url(img/1qa.jpg)", backgroundSize: "cover"}
    const style5 = {width: '100%', height: '100%', backgroundImage: "url(images/1qa.webp)", backgroundSize: "cover"}
    const style6 = {width: '100%', height: '100%', backgroundSize: "cover", backgroundImage: "url(https://res.cloudinary.com/dialqb1om/image/upload/v1554966439/q_auto/1qa.jpg)"}
    return (
      <div className="App">
        <header className="App-header">
        {/* <Image cloudName="dialqb1om" publicId="img/test1.jpg" crop="scale" /> */}
        {/* <img src="https://res.cloudinary.com/demo/image/upload/f_auto/seagull.jpg" /> */}
        <div style={style}>
          <div style={style5}></div>
          {/* <Image responsive dpr="auto" width="auto" crop="scale" cloudName="dialqb1om" publicId="1qa.jpg" style={style3} >
          <Transformation fetchFormat="auto" />
          </Image> */}
        {/* <Image responsive angle="20" dpr="auto" width="auto" crop="scale" cloudName="dialqb1om" publicId="sample.jpg" style={style1} /> */}
        {/* <div style={style2} /> */}
        </div>
                {/* <img className="shipImage" src='img/test1.jpg' />
                <img className="shipImage" src='img/test2.jpg' />
                <img className="shipImage" src='img/test3.jpg' />
                <img className="shipImage" src='img/test4.jpg' />
                <img className="shipImage" src='img/test5.jpg' />
                <img className="shipImage" src='img/test6.jpg' />
                <img className="shipImage" src='img/test7.jpg' />
                <img className="shipImage" src='img/test8.jpg' />
                <img className="shipImage" src='img/test9.jpg' />
                <img className="shipImage" src='img/test10.jpg' />
                <img className="shipImage" src='img/test11.jpg' />
                <img className="shipImage" src='img/test12.jpg' />
                <img className="shipImage" src='img/test13.jpg' />
                <img className="shipImage" src='img/test14.jpg' />
                <img className="shipImage" src='img/test15.jpg' />
                <img className="shipImage" src='img/test16.jpg' />
                <img className="shipImage" src='img/test17.jpg' />
                <img className="shipImage" src='img/test18.jpg' />
                <img className="shipImage" src='img/test19.jpg' />
                <img className="shipImage" src='img/test20.jpg' />
                <img className="shipImage" src='img/test21.jpg' />
                <img className="shipImage" src='img/test22.jpg' />
                <img className="shipImage" src='img/test23.jpg' />
                <img className="shipImage" src='img/test24.jpg' />
                <img className="shipImage" src='img/test25.jpg' />
                <img className="shipImage" src='img/test26.jpg' />
                <img className="shipImage" src='img/test27.jpg' />
                <img className="shipImage" src='img/test28.jpg' />
                <img className="shipImage" src='img/test29.jpg' />
                <img className="shipImage" src='img/test30.jpg' />
                <img className="shipImage" src='img/test31.jpg' />
                <img className="shipImage" src='img/test32.jpg' />
                <img className="shipImage" src='img/test33.jpg' />
                <img className="shipImage" src='img/test34.jpg' />
                <img className="shipImage" src='img/test35.jpg' />
                <img className="shipImage" src='img/test36.jpg' />
                <img className="shipImage" src='img/test37.jpg' />
                <img className="shipImage" src='img/test38.jpg' />
                <img className="shipImage" src='img/test39.jpg' />
                <img className="shipImage" src='img/test40.jpg' />
                <img className="shipImage" src='img/test41.jpg' /> */}
                {/* {ie && <><img className="shipImage" src='images/test1.jxr' />
                <img className="shipImage" src='images/test2.jxr' />
                <img className="shipImage" src='images/test3.jxr' />
                <img className="shipImage" src='images/test4.jxr' />
                <img className="shipImage" src='images/test5.jxr' />
                <img className="shipImage" src='images/test6.jxr' />
                <img className="shipImage" src='images/test7.jxr' />
                <img className="shipImage" src='images/test8.jxr' />
                <img className="shipImage" src='images/test9.jxr' />
                <img className="shipImage" src='images/test10.jxr' />
                <img className="shipImage" src='images/test11.jxr' />
                <img className="shipImage" src='images/test12.jxr' />
                <img className="shipImage" src='images/test13.jxr' />
                <img className="shipImage" src='images/test14.jxr' />
                <img className="shipImage" src='images/test15.jxr' />
                <img className="shipImage" src='images/test16.jxr' />
                <img className="shipImage" src='images/test17.jxr' />
                <img className="shipImage" src='images/test18.jxr' />
                <img className="shipImage" src='images/test19.jxr' />
                <img className="shipImage" src='images/test20.jxr' />
                <img className="shipImage" src='images/test21.jxr' />
                <img className="shipImage" src='images/test22.jxr' />
                <img className="shipImage" src='images/test23.jxr' />
                <img className="shipImage" src='images/test24.jxr' />
                <img className="shipImage" src='images/test25.jxr' />
                <img className="shipImage" src='images/test26.jxr' />
                <img className="shipImage" src='images/test27.jxr' />
                <img className="shipImage" src='images/test28.jxr' />
                <img className="shipImage" src='images/test29.jxr' />
                <img className="shipImage" src='images/test30.jxr' />
                <img className="shipImage" src='images/test31.jxr' />
                <img className="shipImage" src='images/test32.jxr' />
                <img className="shipImage" src='images/test33.jxr' />
                <img className="shipImage" src='images/test34.jxr' />
                <img className="shipImage" src='images/test35.jxr' />
                <img className="shipImage" src='images/test36.jxr' />
                <img className="shipImage" src='images/test37.jxr' />
                <img className="shipImage" src='images/test38.jxr' />
                <img className="shipImage" src='images/test39.jxr' />
                <img className="shipImage" src='images/test40.jxr' />
                <img className="shipImage" src='images/test41.jxr' /></> } */}
              {/* {!ie && <><img className="shipImage" src='images/test1.webp' />
                <img className="shipImage" src='images/test2.webp' />
                <img className="shipImage" src='images/test3.webp' />
                <img className="shipImage" src='images/test4.webp' />
                <img className="shipImage" src='images/test5.webp' />
                <img className="shipImage" src='images/test6.webp' />
                <img className="shipImage" src='images/test7.webp' />
                <img className="shipImage" src='images/test8.webp' />
                <img className="shipImage" src='images/test9.webp' />
                <img className="shipImage" src='images/test10.webp' />
                <img className="shipImage" src='images/test11.webp' />
                <img className="shipImage" src='images/test12.webp' />
                <img className="shipImage" src='images/test13.webp' />
                <img className="shipImage" src='images/test14.webp' />
                <img className="shipImage" src='images/test15.webp' />
                <img className="shipImage" src='images/test16.webp' />
                <img className="shipImage" src='images/test17.webp' />
                <img className="shipImage" src='images/test18.webp' />
                <img className="shipImage" src='images/test19.webp' />
                <img className="shipImage" src='images/test20.webp' />
                <img className="shipImage" src='images/test21.webp' />
                <img className="shipImage" src='images/test22.webp' />
                <img className="shipImage" src='images/test23.webp' />
                <img className="shipImage" src='images/test24.webp' />
                <img className="shipImage" src='images/test25.webp' />
                <img className="shipImage" src='images/test26.webp' />
                <img className="shipImage" src='images/test27.webp' />
                <img className="shipImage" src='images/test28.webp' />
                <img className="shipImage" src='images/test29.webp' />
                <img className="shipImage" src='images/test30.webp' />
                <img className="shipImage" src='images/test31.webp' />
                <img className="shipImage" src='images/test32.webp' />
                <img className="shipImage" src='images/test33.webp' />
                <img className="shipImage" src='images/test34.webp' />
                <img className="shipImage" src='images/test35.webp' />
                <img className="shipImage" src='images/test36.webp' />
                <img className="shipImage" src='images/test37.webp' />
                <img className="shipImage" src='images/test38.webp' />
                <img className="shipImage" src='images/test39.webp' />
                <img className="shipImage" src='images/test40.webp' />
                <img className="shipImage" src='images/test41.webp' /></> } */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
