// import "./Register.css";
// import "../../App.css";
// import video from "../../Assets/intro.mp4";
// // import logo from "../../Assets/logo.png";
// import { Link } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import { MdPassword } from "react-icons/md";
// import { FaSignInAlt } from "react-icons/fa";
// import { MdEditNote } from "react-icons/md";

// const Register = () => {
//   return (
//     <div className="loginPage flex">
//       <div className="container flex">
//         <div className="videoDiv">
//           <video src={video} autoPlay muted loop></video>
//           <div className="textDiv">
//             <h2 className="title">Fuel with Future</h2>
//             <p>Pay By Plate!</p>
//           </div>
//           <div className="footerDiv flex">
//             <span className="text">Having an account ?</span>
//             <Link to={"/login"}>
//               <button className="btn">Sign In</button>
//             </Link>
//           </div>
//         </div>
//         <div className="formDiv flex">
//           <div className="headerDiv">
//             {/* <img src={logo} alt="Logo" /> */}
//             <h3>Join Us</h3>
//           </div>
//           <form action="" className="form grid">
//             {/* <span>Login status will go here</span> */}
//             <div className="inputDiv">
//               <label htmlFor="username">UserName</label>
//               <div className="input flex">
//                 <FaUser className="icon" />
//                 <input
//                   type="text"
//                   id="username"
//                   placeholder="Enter your username"
//                 />
//               </div>
//             </div>
//             <div className="inputDiv">
//               <label htmlFor="vehiclenumber">Vehicle Number</label>
//               <div className="input flex">
//                 <MdEditNote className="icon" />
//                 <input
//                   type="text"
//                   id="vehiclenumber"
//                   placeholder="Enter your vehiclenumber"
//                 />
//               </div>
//             </div>

//             <div className="inputDiv">
//               <label htmlFor="password">PassWord</label>
//               <div className="input flex">
//                 <MdPassword className="icon" />
//                 <input
//                   type="text"
//                   id="password"
//                   placeholder="Enter your password"
//                 />
//               </div>
//             </div>
//             <Link to={"/home"}>
//               <button type="submit" className="btn flex">
//                 <span>Sign In</span>
//                 <FaSignInAlt className="icon" />
//               </button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import { useState } from "react";
import Axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import {
//   SelectValue,
//   SelectTrigger,
//   SelectItem,
//   SelectContent,
//   Select,
// } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Component() {
  const [username, setUsername] = useState("");
  const [vehiclenumber, setVehiclenumber] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [vehicletype, setVehicletype] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  const creatUser = () => {
    Axios.post("http://localhost:3001/register", {
      Username: username,
      Vehiclenumber: vehiclenumber,
      Mobilenumber: mobilenumber,
      Vehicletype: vehicletype,
      Location: location,
      City: city,
      Password: password,
    }).then(() => {
      console.log("user has been created");
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/register",
  //       formData
  //     );
  //     alert(response.data);
  //   } catch (error) {
  //     alert("Error registering user");
  //   }
  // };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center  px-4 py-12 sm:px-6 lg:px-8 rounded-3xl">
      <div className="w-full max-w-xl space-y-8 bg-slate-500 p-6 rounded-3xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Register your vehicle
          </h2>
        </div>
        <form
          // action="#"
          className="space-y-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                className="block text-sm font-medium text-gray-300"
                htmlFor="username"
              >
                Username
              </Label>
              <div className="mt-1">
                <Input
                  className="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                  name="username"
                  id="username"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  required
                  type="text"
                />
              </div>
            </div>
            <div>
              <Label
                className="block text-sm font-medium text-gray-300"
                htmlFor="vehiclenumber"
              >
                Vehicle Number
              </Label>
              <div className="mt-1">
                <Input
                  className="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                  name="vehiclenumber"
                  id="vehiclenumber"
                  onChange={(event) => {
                    setVehiclenumber(event.target.value);
                  }}
                  required
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                className="block text-sm font-medium text-gray-300"
                htmlFor="mobilenumber"
              >
                Mobile Number
              </Label>
              <div className="mt-1">
                <Input
                  // autoComplete="mobile-number"
                  className="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                  name="mobilenumber"
                  id="mobilenumber"
                  onChange={(event) => {
                    setMobilenumber(event.target.value);
                  }}
                  required
                  type="tel"
                />
              </div>
            </div>
            {/* <div>
              <Label
                className="block text-sm font-medium text-gray-300"
                htmlFor="vehicle-type"
              >
                Vehicle Type
              </Label>
              <div className="mt-1">
                <Select id="vehicle-type" name="vehicle-type" required>
                  <SelectTrigger className="block w-full appearance-none rounded-md border border-transparent bg-gray-700 bg-opacity-50 px-3 py-2 text-white placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm">
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="bike">Bike</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div> */}
            <div>
              <Label
                className="block text-sm font-medium text-gray-300"
                htmlFor="vehicletype"
              >
                Vehicle-type
              </Label>
              <div className="mt-1">
                <Input
                  className="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                  name="vehicletype"
                  id="vehicletype"
                  onChange={(event) => {
                    setVehicletype(event.target.value);
                  }}
                  required
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                className="block text-sm font-medium text-gray-300"
                htmlFor="location"
              >
                Location
              </Label>
              <div className="mt-1">
                <Input
                  className="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                  name="location"
                  id="location"
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                  required
                  type="text"
                />
              </div>
            </div>
            <div>
              <Label
                className="block text-sm font-medium text-gray-300"
                htmlFor="city"
              >
                City
              </Label>
              <div className="mt-1">
                <Input
                  // autoComplete="city"
                  className="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                  name="city"
                  id="city"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                  required
                  type="text"
                />
              </div>
            </div>
          </div>
          <div>
            <Label
              className="block text-sm font-medium text-gray-300"
              htmlFor="password"
            >
              Password
            </Label>
            <div className="mt-1">
              <Input
                // autoComplete="current-password"
                className="block w-full rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-900 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                name="password"
                id="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <Button
              className="flex w-full justify-center rounded-md bg-[#0070f3] px-4 py-2 text-lg font-semibold text-gray-900 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              type="submit"
              onClick={creatUser}
            >
              Register
            </Button>
          </div>
          <div className="text-center text-lg text-gray-300">
            Or<span> </span>
            <Link to="/" className="font-medium text-black hover:text-gray-200">
              <span className="text-xl font-bold"> Sign in </span>
            </Link>
            if you already have an account
          </div>
        </form>
      </div>
    </div>
  );
}
