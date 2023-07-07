import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Bars } from "react-loader-spinner";

const Detail = () => {
  const { id } = useParams();
  //   window.alert(id);
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);

      setData(_data.data());
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <div className="p-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center">
      {loading ? (
        <div className="h-96 flex w-full justify-center items-center">
          <Bars height={25} color="white" />
        </div>
      ) : (
        <>
          <img
            className="h-96 block md:sticky top-24"
            src={data.image}
            alt=""
          />
          <div className="md:ml-4 ml-0 w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-400">
              {data.title}
              <span className="text-xl">({data.year})</span>
            </h1>
            <ReactStars size={20} half={true} value={5} edit={false} />
            <p className="mt-2">{data.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
