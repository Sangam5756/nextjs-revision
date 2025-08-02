# 🧠 Basic Next.js API + SignIn Form

This is a simple project demonstrating how to use Next.js App Router for handling **API routes** (`GET`, `POST`, `PUT`, `DELETE`) and a **client-side sign-in form** that sends a POST request using `axios`.

---

## 📁 Project Structure

```
/app
  /api
    /v1
      /user
        route.ts (API Handlers)
  /signin
    page.tsx (Sign-in UI)
```

---

## 🚀 Features

* ✅ API routes using `app/api/` folder
* ✅ Handles `GET`, `POST`, `PUT`, and `DELETE` methods
* ✅ Axios-based client-side POST request
* ✅ Simple UI with state management using `useState`

---

## 🧪 API Routes

### `GET /api/v1/user`

Returns a static user object.

**Response:**

```json
{
  "user": {
    "name": "sangam",
    "lastName": "mundhe",
    "method": "GET"
  }
}
```

---

### `POST /api/v1/user`

Accepts JSON data (e.g., username and password). Logs it on the server.

**Sample Request Body:**

```json
{
  "username": "admin",
  "password": "123456"
}
```

**Response:**

```json
{
  "user": {
    "name": "sangam",
    "lastName": "mundhe",
    "method": "PUT"
  }
}
```

> 📝 Logs the request body in the server console.

---

### `PUT /api/v1/user`

Returns a hardcoded response.

**Response:**

```json
{
  "user": {
    "name": "sangam",
    "lastName": "mundhe",
    "method": "POST"
  }
}
```

---

### `DELETE /api/v1/user`

Returns a hardcoded response.

**Response:**

```json
{
  "user": {
    "name": "sangam",
    "lastName": "mundhe",
    "method": "DELETE"
  }
}
```

---

## 🧑‍💻 Frontend: `/signin/page.tsx`

Simple form with two fields (`username`, `password`). On submit:

* Sends POST request to `/api/v1/user`
* Shows success alert
* Clears form fields

```ts
await axios.post("/api/v1/user", {
  username,
  password,
});
```

---

## 💡 How to Run

1. Install dependencies:

```bash
npm install
```

2. Run the server:

```bash
npm run dev
```

3. Open in browser:

```
http://localhost:3000/signin
```

