import { Loading } from "../../components/Loading";
import { useGetItemsQuery } from "../../services/api-service";
import "./JetSetter.scss";

const itemsCount = 0;
const unpackedItems = [];
const packedItems = [];

export const JetSetter = () => {
  const { data, isLoading } = useGetItemsQuery();
  console.log({ data });

  return (
    <div className="jetSetter">
      <h1>Packing List</h1>
      <div>{itemsCount} items</div>

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
          {data && data.length ? (
            data?.map((item) => (
              <div key={item.id}>
                <div>Name: {item.name}</div>
                <div>
                  Status: {item.packed ? "is packed" : "is not packed yet"}
                </div>
              </div>
            ))
          ) : (
            <div>no items</div>
          )}
        </div>
      </div>
    </div>
  );
};
