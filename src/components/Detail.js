import React from "react";
import ReactStars from "react-stars";

const Detail = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center">
      <img
        className="h-96 block md:sticky top-24"
        src="https://i.pinimg.com/564x/d3/0f/ea/d30fea780e30a2146e4aa02cfbb2c3b2.jpg"
        alt=""
      />
      <div className="md:ml-4 ml-0 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-400">
          Star Wars<span className="text-xl">(2014)</span>
        </h1>
        <ReactStars size={20} half={true} value={5} edit={false} />
        <p className="mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Detail;
