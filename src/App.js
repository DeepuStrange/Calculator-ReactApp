import "./cal.css";
import * as math from "mathjs";
function App(){
  const captureValue =(value)=>{
    var text = document.getElementById("text");
    text.value += value
  }
  const clearResult = ()=>{
    document.getElementById("text").value = "";
  }
  const backSpace = ()=>{
    var value = document.getElementById("text");
    var curValueDelete = value.value;
    if(curValueDelete !=="0"){
      value.value = curValueDelete.slice(0,-1)
    }
  }
  const result =()=>{
   try{
    var value = document.getElementById("text").value;
    var calculateResult = math.evaluate(value)
    document.getElementById("text").value = calculateResult
   }catch(err){
    document.getElementById("text").value = "ERROR"
   }
  }
  return(
    <div style={{
      display:"grid",
      justifyContent:"center",
}}>
      <div style={{
        display:"grid",
        rowGap:20,
        justifyItems:"center",
      }}>
        <input id="text" style={{
          width:"100%",
          height:"50px",
          textAlign:"right"
        }} type="text" disabled></input>
        <div style={{
          display:"grid",
          rowGap:20,
          backgroundColor:"slategray",
          padding:10
        }}>
        <div style={{
          display:"grid",
          gridTemplateColumns:"auto auto 35px 33px",
          gap:35,
          alignItems:"center",
}}>
          <button onClick={clearResult} className="btn1">AC</button>
          <button onClick={backSpace} className="btn1">Del</button>
          <button onClick={()=>{captureValue("%")}} className="btn1">%</button>
          <button onClick={()=>{captureValue("+")}} className="btn4">+</button>
        </div>
        <div className="Adjust">
        <button onClick={()=>{captureValue("1")}} className="btn1">1</button>
        <button onClick={()=>{captureValue("2")}} className="btn1">2</button>
        <button onClick={()=>{captureValue("3")}} className="btn1">3</button>
        <button onClick={()=>{captureValue("-")}} className="btn4">-</button>
        </div>
        <div className="Adjust">
          <button onClick={()=>{captureValue("4")}} className="btn1">4</button>
          <button onClick={()=>{captureValue("5")}} className="btn1">5</button>
          <button onClick={()=>{captureValue("6")}} className="btn1">6</button>
          <button onClick={()=>{captureValue("*")}} className="btn4">*</button>
        </div>
        <div className="Adjust">
          <button onClick={()=>{captureValue("7")}} className="btn1">7</button>
          <button onClick={()=>{captureValue("8")}} className="btn1">8</button>
          <button onClick={()=>{captureValue("9")}} className="btn1">9</button>
          <button onClick={()=>{captureValue("/")}} className="btn4">/</button>
        </div>
        <div className="Adjust">
          <button onClick={()=>{captureValue("00")}} className="btn1">00</button>
          <button onClick={()=>{captureValue("0")}} className="btn1">0</button>
          <button onClick={()=>{captureValue(".")}} className="btn1">.</button>
          <button onClick={result} className="btn4">=</button>
        </div>
        </div>
      </div>
    </div>
  )
}
export default App;