import React from "react";
import UserCard from "./components/UserCard";

export default function index() {
  const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  return (
    <div className="px-6 py-10 w-screen h-screen">
      <h1 className="text-xl font-extrabold">SimpleUserList</h1>
      <div className="mt-10">
        <UserCard user={user} />
      </div>
    </div>
  );
}
