import useCart from "../../hooks/useCart";
import { Trash2 } from "lucide-react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const Cart = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);

  const handleDelete = (item) => {
    console.log(item)
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7D0A0A",
      cancelButtonColor: "#999999",
      confirmButtonText: "Yes, Delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/carts/${item._id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data.deletedCount)
            if (data.deletedCount > 0) {
              refetch();

              Swal.fire({
                title: "Deleted!",
                text: "Your order has been deleted.",
                icon: "success"
              })
            }
          })
      }
    })
  }

  return (
    <div>
      <div className="section-container py-24">
        <div className="flex flex-col justify-center items-center w-full h-full gap-6">
          <h1 className="text-7xl font-bold leading-[1.2] text-center">
            Items Added to The <span className="text-secondary">Cart</span>
          </h1>
        </div>
      </div>

      <div className="section-container">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-secondary text-white">
              <tr>
                <th>No</th> 
                <th>Food</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="food image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">
                    {item.name}
                  </td>
                  <td>
                    {item.quantity}
                  </td>
                  <td className="font-medium">
                    $ {item.price}
                  </td>
                  <td>
                    <button className="bg-secondary text-white btn btn-sm" onClick={() => handleDelete(item)}>
                      <Trash2 className="w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-container flex items-top justify-between bg-white rounded-3xl p-8 mt-20">
        <div className="space-y-3">
          <h3 className="font-medium text-2xl">Customer Details</h3>
          <ul>
            <li className="font-normal text-base">Name: {user.displayName}</li>
            <li className="font-normal text-base">Email: {user.email}</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-medium text-2xl">Shopping Details</h3>
          <ul>
            <li className="font-normal text-base">Total items: {cart.length}</li>
            <li className="font-normal text-base">Total price: $99.0</li>

            <button className="mt-4 px-6 py-2 rounded-xl bg-primary text-white font-semibold text-sm">
              Procceed Checkout
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cart
