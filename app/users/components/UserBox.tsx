"use client";
import { User } from "@prisma/client";
import React from "react";

type UserBoxProps = {
  data: User;
};

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  return <div>{data.email}</div>;
};
export default UserBox;
