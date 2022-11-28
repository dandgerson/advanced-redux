import { useMemo } from "react";
import { Loading } from "../../components/Loading";
import { useGetItemsQuery } from "../../services/api-service";
import { Item } from "./Item";
import "./JetSetter.scss";

export const JetSetter = () => {
  const { data, isLoading } = useGetItemsQuery();
  console.log({ data });
  const items = useMemo(() => data ?? [], [data]);

  return (
    <div className="jetSetter">
      <h1>Packing List</h1>
      <div>{items.length} items</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          const input = target[0] as HTMLInputElement;
          console.log(input.value);

          input.value = input.defaultValue;
        }}
      >
        <label htmlFor="add-new-item">
          New item name
          <input
            id="add-new-item"
            type="text"
            defaultValue=""
            placeholder="New Item"
          />
        </label>
        <button>Add new item</button>
      </form>

      <div className="packages">
        <div className="packagesContainer">
          <Loading loading={isLoading} />
          <h2>Items</h2>
          {items.length ? (
            items.map((item) => <Item key={item.id} item={item} />)
          ) : (
            <div>no items</div>
          )}
        </div>
      </div>
    </div>
  );
};
