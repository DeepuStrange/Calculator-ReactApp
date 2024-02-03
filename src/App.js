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
      marginTop:"30px"
}}>
  <h1 style={{textAlign:"center"}}>Calculator</h1>
      <div style={{
        display:"grid",
        rowGap:20,
        justifyItems:"center",
        border:"1px solid grey",
        padding:"20px",
        borderRadius:"10px"
      }}>
        <input id="text" style={{
          width:"100%",
          height:"50px",
          textAlign:"right",
          filter:"drop-shadow(3px 3px 1px blue)",
        }} type="text" disabled></input>
        <div className="btns">
          <button onClick={clearResult} >AC</button>
          <button onClick={backSpace} >Del</button>
          <button onClick={()=>{captureValue("%")}} >%</button>
          <button onClick={()=>{captureValue("+")}} >+</button>
          <button onClick={()=>{captureValue("1")}} >1</button>
          <button onClick={()=>{captureValue("2")}} >2</button>
          <button onClick={()=>{captureValue("3")}} >3</button>
          <button onClick={()=>{captureValue("-")}} >-</button>
          <button onClick={()=>{captureValue("4")}} >4</button>
          <button onClick={()=>{captureValue("5")}} >5</button>
          <button onClick={()=>{captureValue("6")}} >6</button>
          <button onClick={()=>{captureValue("*")}} >*</button>
          <button onClick={()=>{captureValue("7")}} >7</button>
          <button onClick={()=>{captureValue("8")}} >8</button>
          <button onClick={()=>{captureValue("9")}} >9</button>
          <button onClick={()=>{captureValue("/")}} >/</button>
          <button onClick={()=>{captureValue("00")}} >00</button>
          <button onClick={()=>{captureValue("0")}} >0</button>
          <button onClick={()=>{captureValue(".")}} >.</button>
          <button onClick={result}>=</button>
        </div>
      </div>
    </div>
  )
}
export default App;