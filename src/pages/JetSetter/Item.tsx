import { FC } from "react";

export const Item: FC<{ item: Item }> = ({ item }) => {
  return (
    <div className="item">
      <input type="checkbox" checked={item.packed} />
      <div
        style={{
          fontWeight: item.packed ? "bold" : "",
        }}
      >
        {item.name}
      </div>
      <button className="button">Edit</button>
      <button className="button button-danger">Remove</button>
    </div>
  );
};
