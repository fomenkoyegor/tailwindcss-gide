import React, { FC } from "react";
import { IUser } from "../models/IUser";
import { AiFillAndroid, AiFillCodepenCircle } from "react-icons/ai";

interface IProps {
  user: IUser;
}

const UserCard: FC<IProps> = ({ user }) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex mt-2">
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <AiFillAndroid />
            {user.email}
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {user.name} {user.username}
          </div>
          <p className="text-gray-700 text-base">
            {user.phone} <br /> {user.email} {user.company.name}
          </p>
        </div>
        <div className="flex items-center">
          <AiFillCodepenCircle />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{user.website}</p>
            <p className="text-gray-600">
              {user.address.city}
              {user.address.street}
              {user.address.zipcode}
              {user.address.geo.lat}
              {user.address.geo.lng}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
