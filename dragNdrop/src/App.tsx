// import Items from "./Items";
// import Item from "./Item";
import "./App.css";
import {useState} from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleOnDrag(e, item) {
    e.dataTransfer.setData("text/plain", item);
  }

  function handleOnDrop(e) {
    e.preventDefault();
    const itemType = e.dataTransfer.getData("text/plain");
    setItems([...items, itemType]);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <div
        className="item-single"
        draggable
        onDragStart={e => handleOnDrag(e, "Rick")}>
        Rick
      </div>
      <div
        className="item-single"
        draggable
        onDragStart={e => handleOnDrag(e, "Joe")}>
        Joe
      </div>
      <div
        className="item-single"
        draggable
        onDragStart={e => handleOnDrag(e, "Arnie")}>
        Arnie
      </div>
      <div
        className="dropped-items"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}>
        {items.map((item, idx) => (
          <div className="dropped-item" key={idx}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

function Item({children}) {
  return <div className="item-single">{children}</div>;
}
