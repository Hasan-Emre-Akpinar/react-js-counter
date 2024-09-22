
function App() {
  let Counter = 0;

  function increase(){
    Counter = Counter + 1;
    document.getElementById("Number").innerHTML = Counter;
  }
  function decrease(){
    Counter = Counter - 1;
    document.getElementById("Number").innerHTML = Counter;
  }
  return (
    <div className="App">
      <p id="Number">Sayı burada gözükecek</p>
      <button onClick={decrease}>-1</button>
      <button onClick={increase}>+1</button>
    </div>
  );
}

export default App;
