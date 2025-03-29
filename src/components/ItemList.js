import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
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
              <div className="absolute">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 mx-4 my-30 rounded-md">
                  Add to Cart
                </button>
              </div>
              <img className="w-full" src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
