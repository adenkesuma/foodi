const Cart = () => {
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
              {/* row 1 */}
              <tr>
                <td>1</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br/>
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                <td>
                  hehe
                </td>
              </tr>
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart
