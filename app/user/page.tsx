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
