// when we are on server making proper use of the nextjs
import axios from "axios";

async function fetchData() {
  const fetch = await axios.post("http://localhost:3000/api/v1/user",{name:"sangam"});
  // await new Promise(r => setTimeout(r, 5000));
  return fetch.data;
}

export default async function User() {
  const data = await fetchData();
  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

// when we are on client side
// "use client";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function User() {
//   const [userData, setUserData] = useState("");

//   const fetchData = async () => {
//     const fetch = await axios.get(
//       "https://mocki.io/v1/3b842976-8102-4b9c-8e96-faef6cc3a8bc"
//     );
//     setUserData(fetch.data.user);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div>{JSON.stringify(userData)}</div>
//     </>
//   );
// }
