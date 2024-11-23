import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "Paris", "Seoul", "Amman"];

  const handleSelectItem = (item: String) => {
    console.log(`Selected item: ${item}`);
  }
  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App;
