import { User } from "lucide-react";

const Profile = ({ user }) => {
  return (
    <div className="-mt-2">
      <div className="drawer drawer-end z-40">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-ghost btn-circle avatar drawer-button">
            <div className="w-9 rounded-full">
              {user?.photoURL ? (
                <img 
                  alt="user profile" 
                  src={user.photoURL}
                />
              ) : (
                <div className="bg-primary h-full w-full flex items-center justify-center rounded-full">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content pt-6">
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
