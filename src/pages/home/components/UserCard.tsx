import React from "react";
import * as Icons from "@/icons";

type UserCardProps = {
  user: {
    id: number;
    name: string;
    email: string;
    website: string;
  };
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="p-4 border rounded-md border-primary space-y-4 flex flex-wrap">
      <div>
        <h2 className="font-bold">{user.name}</h2>
        <div className="mt-4">
          <div className="flex gap-2 items-center flex-wrap">
            <Icons.Mail size={17} className="text-secondary" />
            <p>{user.email}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Icons.Globe size={17} className="text-secondary" />
            <p>{user.website}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
