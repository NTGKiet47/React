import ListGroup from "./components/ListGroup";

function App() {
  const items = ["GIA HEO", "KIEU ANH", "HUYNH ANH", "LAM ANH"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
