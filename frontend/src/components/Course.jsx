import React,{useEffect, useState} from "react";
// import list from '../list.json'
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from 'axios';

const Course = () => {
  const [book, setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res= await axios.get('http://localhost:4001/book');
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <div className="text-2xl md:text-4xl">
            We are delighed to have you{" "}
            <span className="text-pink-500">Here :)</span>{" "}
          </div>
          <p className="mt-12">
            Welcome to our learning hub! Explore a variety of courses designed
            to enhance your reading, writing, and analytical skills. Whether
            you're a literature enthusiast, an aspiring writer, or someone
            looking to dive into the world of books, we have something for you.
          </p>
          <Link to="/">
            <button className="mt-6 btn btn-secondary  px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {
            book.map((item)=>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Course;
