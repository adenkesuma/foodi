import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2"
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, isPending, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (itemId) => {
     Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7D0A0A",
      cancelButtonColor: "#999999",
      confirmButtonText: "Yes, Delete it!"
    }).then( async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${itemId}`);
        console.log(res)

        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your order has been deleted.",
          icon: "success"
        })
      }
    })
  }

  return (
    <div className="w-full md:w-[870px] px-6 py-8 mx-auto">
      <h1 className="text-2xl font-bold">Manage Items</h1>

      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  No
                </th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="rounded-xl w-14 h-14 object-cover"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <th>
                    <Link to={`/dashboard/update-menu/${item._id}`} className="px-3 py-1 bg-third rounded-xl text-black">
                      Update
                    </Link>
                  </th>
                  <th>
                    <button 
                      onClick={() => handleDeleteItem(item._id)}
                      className="px-3 py-1 bg-secondary  rounded-xl text-white">Delete</button>
                  </th>               
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageItems;
