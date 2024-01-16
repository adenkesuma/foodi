import { useQuery } from "@tanstack/react-query";
import { UsersRound } from "lucide-react";

const Users = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: "users",
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/users`)
      return res.json();
    }
  })

  return (
    <div className="w-full">
      <div className="flex items-center justify-between my-8 mx-6">
        <h1 className="text-2xl font-bold">All Users</h1>
        <span className="font-semibold text-lg">Total Users: <span className="text-primary font-bold text-3xl">{users.length}</span></span>
      </div>

      <div className="mx-6">
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            <thead className="bg-primary text-white ronded-xl">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user?._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <p className="font-bold text-green-600">Admin</p>
                    ) : (
                      <button className="py-1 px-3 rounded-xl bg-third">
                        <UsersRound className="w-4" />
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="px-3 py-1 rounded-xl bg-secondary text-white font-medium text-sm">
                      Delete
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

export default Users
