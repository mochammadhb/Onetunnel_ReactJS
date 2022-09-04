import React from "react";
import { useEffect } from "react";
import { RiUser3Fill, RiImageFill } from "react-icons/ri";

const Quotes = () => {
  const data = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Asperiores, consectetur quam dolore enim accusantium deserunt alias
  est reiciendis nostrum porro inventore molestiae voluptas similique
  numquam ipsa provident consequuntur vero dignissimos.`;

  return (
    <>
      <div className="w-full flex rounded-xl bg-white h-auto p-3 mb-5 items-center shadow-md">
        <div className="bg-indigo-200 p-2 rounded-full text-indigo-500 mx-2">
          <RiUser3Fill />
        </div>
        <input
          type="text"
          className="w-full outline-none  p-1 px-4 text-sm bg-white"
          placeholder="What's on your mind?"
        />
        <div className=" text-indigo-500">
          <input type="file" id="image" className="hidden invisible" />
          <label htmlFor="image">
            <RiImageFill className="my-auto h-8 w-12 p-1 stroke-gray-200 border-l cursor-pointer" />
          </label>
        </div>
      </div>
      <div className="bg-white w-full h-auto p-3.5 rounded-xl border mb-3">
        <div className="flex justify-between">
          <label className="font-semibold text-indigo-500">@onetunnel</label>
          <span className="text-sm text-indigo-500">8 minute ago</span>
        </div>
        <div className="text-gray-700 my-2 p-2">
          <p>
            {data.length > 200 ? data.substring(0, 200) + "........" : data}
          </p>
          <div className="flex my-1 p-2">
            <img
              width="50%"
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <img
              width="50%"
              src="https://images.unsplash.com/photo-1533746228171-962520811097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>

        <div>
          <span className="text-sm text-indigo-500">0 Comments</span>
        </div>
      </div>
      <div className="bg-white w-full h-auto p-3.5 rounded-xl border mb-3">
        <div className="flex justify-between">
          <label className="font-semibold text-indigo-500">@mochammadhb</label>
          <span className="text-sm text-indigo-500">3 minute ago</span>
        </div>
        <div className="text-gray-700 my-2 p-2">
          <p>
            {data.length > 200 ? data.substring(0, 200) + "........" : data}
          </p>
          <div className="flex my-1 p-2 justify-start">
            <img
              width="50%"
              src="https://images.unsplash.com/photo-1582994254571-52c62d96ebab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <img
              width="50%"
              src="https://images.unsplash.com/photo-1504992963429-56f2d62fbff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>

        <div>
          <span className="text-sm text-indigo-500">256 Comments</span>
        </div>
      </div>
    </>
  );
};

export default Quotes;
