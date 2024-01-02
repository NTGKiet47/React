import { Fragment, useState } from "react";

interface Progs {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Progs) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>Dynamic List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => {
              setSelectedIndex(index);
              console.log(event.target);
            }}
          >
            {item}
          </li>
        ))}
        ;
      </ul>
    </Fragment>
  );
}
export default ListGroup;
