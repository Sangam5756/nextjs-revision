
# 🚀 Next.js Data Fetching Practice

This project is a **practical implementation** to demonstrate how to **fetch data using Axios** in a **Next.js** application, both on the **server side** and the **client side**.

---

## 📚 What This Code Does

This project includes two versions of the same functionality:

### 1. **Server-Side Data Fetching (SSR)**

```js
// File: app/page.js (or any server component in Next.js App Router)
import axios from "axios";

async function fetchData() {
  const fetch = await axios.get(
    "https://mocki.io/v1/3b842976-8102-4b9c-8e96-faef6cc3a8bc"
  );
  return fetch.data;
}

export default async function Home() {
  const data = await fetchData();
  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}
```

🟢 **Why use server-side?**

* Faster initial load.
* SEO-friendly.
* Keeps API keys or sensitive data secure.
* Used in Server Components (default in Next.js App Router).


### 2. **Client-Side Data Fetching**

```js
// File: app/page.js (with `"use client"` at the top)
"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState("");

  const fetchData = async () => {
    const fetch = await axios.get(
      "https://mocki.io/v1/3b842976-8102-4b9c-8e96-faef6cc3a8bc"
    );
    setUserData(fetch.data.user);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>{JSON.stringify(userData)}</div>
    </>
  );
}
```

🟢 **Why use client-side?**

* Needed when the data is dynamic and needs to update in real-time (e.g., user input).
* Best for interactive components that depend on browser-side logic.


## 🔧 Tools Used

* **Next.js (App Router)**
* **Axios** for HTTP requests
* **React useEffect & useState** (for client side)
* **Mocki.io** as a free mock API endpoint


## 📌 Purpose of This Project

 This is a **learning exercise** to understand the **difference between client-side and server-side rendering in Next.js**, and how to handle **data fetching** in both cases.


## 🧠 What I Learned

* How to write and use **async functions** for data fetching.
* How to fetch data on the **server** using `async/await`.
* How to fetch data on the **client** using `useEffect()` and `useState()`.
* How Next.js handles server and client components separately in the **App Router**.

