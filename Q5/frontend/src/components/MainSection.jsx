import React from "react";
import agens from "../assets/agens.png";




const Button = ({ text }) => {
  return (
    <div className="bg-blue-800 px-6 py-2 text-md text-white hover:text-yellow-400 transition-all ease-in duration-200 cursor-pointer rounded font-semibold">
      {text}
    </div>
  );
};

function MainSection() {
  return (
    
      <div className="bg-white  pt-20 md:pt-24 h-screen">
        <div className="flex flex-col justify-center items-center">
          <img className="pt-5 md:pt-20 pb-10" src={agens} />
          <div className="md:w-1/2 px-8">
            <p className="text-xl font-bold text-gray-700 text-center">
              An integration of Bitnine’s DB technology and PG expertise
            </p>
            <p className="text-center md:text-[16px] text-sm md:pb-5  text-gray-600 pt-3 ">
              AgensSQL is an all-new relational DBMS based on PostgreSQL, with
              years of expertise
              <p className="px-3">
                and knowledge accumulated through database research and
                development.
              </p>
            </p>
            <p className="text-center text-sm md:text-[16px] md:pb-5   text-gray-600 pt-3">
              The enterprise package, along with AgensSQL engine, is an
              all-in-one solution that
              <p> ensures the efficiency and scalability of data management.</p>
            </p>
            <p className="text-center text-sm md:text-[16px]  text-gray-600 pt-3 px-10">
              Get AgensSQL now for stable operation and management services at a
              <p>reduced maintenance cost.</p>
            </p>
          </div>
          <div className="pt-20 flex flex-row justify-evenly space-x-2 md:space-x-10">
            <Button text="CONTACT" />
            <Button text="BROCHURE" />
            <Button text="BLOG" />
          </div>
        </div>
      </div>
  );
}

export default MainSection;
