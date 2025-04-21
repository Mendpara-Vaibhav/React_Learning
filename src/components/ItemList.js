import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch(); // Use the Redux dispatch function to dispatch actions

  const handleAddItems = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          className="p-2 m-2 flex justify-between border-gray-200 border-b-2 text-left"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                {"- ₹ "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute my-[-18]">
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 mx-2 rounded-md"
                // onClick={ handleAddItems}
                // onClick={ handleAddItems(item)}
                onClick={() => handleAddItems(item)}
              >
                Add +
              </button>
            </div>
            <img className="w-full" src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
