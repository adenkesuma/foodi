import { Link } from "react-router-dom";

const CustomerSupport = () => {
  return (
    <div className="w-full md:w-[870px] px-6 py-8 mx-auto">
      <h1 className="text-2xl font-bold">
        Selamat datang di Foodi Customer Support!
      </h1>

      <p className="mb-2 font-semibold text-xl mt-8">Cara menghubungi kami:</p>

      <ul>
        <li>
          - Email:
          <Link to="adenfdfd10@gmail.com">
            adenfdfd10@gmail.com            
          </Link>
        </li>
        <li>
          - Telepon: +62 812 7616 9833
        </li>
        <li>
          - Github: 
          <Link className="font-semibold text-blue-600" to="https://github.com/adenkesuma">
            {" "}https://github.com/adenkesuma
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default CustomerSupport;
