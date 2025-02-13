import React from "react";
import UserCard from "./components/UserCard";

export default function index() {
  const user = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    website: "hildegard.org",
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
