import style from './style.css';
import img from "./hanen.jpeg";
import video from "./myVideo.mp4";
import './App.css';
function App() {
  return (
    <div className="App">
    <header className="App-header">
        
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
  
        <h1 className="title red">Hanen </h1>
  
        
        
        <img src={img}/> 
        {"\n"}
      
        <img src='./hanen.jpeg'/>
        {"\n"}
        </div>
  
        <video width="320" height="240" autostart autoPlay controls src={video} type="video/mp4"/>
  
       
        </header>
    </div>
  );
}

export default App;
