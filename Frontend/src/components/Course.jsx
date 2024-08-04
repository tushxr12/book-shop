import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div
        data-theme="light"
        className="max-w-screen-2xl container mx-auto md:px-20 px-4"
      >
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            voluptatibus distinctio ratione, sint pariatur rem sapiente debitis
            eum laboriosam cum inventore et labore ex eligendi expedita corporis
            quae, officiis dolores necessitatibus officia ea natus! Doloremque
            ullam aspernatur iste provident consequuntur. Laudantium odit
            cupiditate ad unde id dolore dicta nostrum, autem consectetur, quo
            quia. Aut veniam ex voluptate velit vero, adipisci ipsam distinctio,
            explicabo, consectetur quod est pariatur ratione cupiditate corrupti
            eaque! Similique expedita perferendis a quis alias ratione quod
            distinctio, modi officia, labore rem delectus sunt nobis veniam
            fugit dolorum voluptas voluptates possimus. Odit, est nulla sequi
            optio porro placeat rerum maxime, officia molestiae aperiam
            reiciendis odio et aut earum at inventore, velit incidunt. Ex
            voluptate maiores beatae recusandae corporis. Sint minus fugit
            explicabo dolorum dolor repudiandae facilis, reprehenderit rerum
            natus illo quibusdam eaque dicta aspernatur dolores iusto incidunt
            aliquid? Quos consequuntur doloribus mollitia tenetur vero eos
            dicta? Magni, amet.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
