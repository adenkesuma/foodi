import useCart from "../../hooks/useCart";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7D0A0A",
      cancelButtonColor: "#999999",
      confirmButtonText: "Delete"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your order has been deleted.",
          icon: "success"
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
    </div>
  )
}

export default Cart
