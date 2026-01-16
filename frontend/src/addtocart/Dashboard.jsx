import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  decreaseQuantity,
  increaseQuantity,
  removeCart,
} from "../slice/cartSlice";

const products = [
  { id: 1, text: "Phone", price: 150 },
  { id: 2, text: "Laptop", price: 500 },
  { id: 3, text: "Headphone", price: 200 },
];

const Dashboard = () => {
  const { items, total } = useSelector((state) => state.cart);

  console.log("items: ", items);

  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div>
        <h2>Products</h2>
        {products?.map((p) => (
          <div className="" key={p.id}>
            <p>
              {p.name} - {p.price} Rs.
            </p>
            <button onClick={() => dispatch(addCart(p))}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        {items.map((item) => (
          <div>
            <p>
              {item.text} - {item.price} * {item.qty}
            </p>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
              -
            </button>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>
              +
            </button>
            <button onClick={() => dispatch(removeCart(item.id))}>
              Remove
            </button>
          </div>
        ))}

        <div>Total: {total} Rs.</div>
      </div>
    </div>
  );
};

export default Dashboard;
