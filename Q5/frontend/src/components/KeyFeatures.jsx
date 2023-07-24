import React from 'react'
import enterprise_package from "../assets/entp.png";
import key_features from "../assets/kft.png";
import password_profile from "../assets/Password-Profile.png";
import data_reduction from "../assets/Data-Redaction.png";
import auditing from "../assets/Auditing.png";

function KeyFeatures() {
  return (
    <>
        
      <div className="bg-gray-100  w-full flex justify-center items-center">
        <div className="md:py-32 py-10 px-5">
          <img src={enterprise_package} alt="enterprise package" />
        </div>
      </div>



      <div className="bg-white flex flex-col items-center px-5">
        <p className="pt-20 md:text-3xl text-2xl font-bold text-gray-900">
          Key features
        </p>
        <p className="text-center text-sm md:text-[16px] md:pb-5   text-gray-600 pt-3">
          Manage your data with Agens Enterprise Package
          <p className="pt-1">
            {" "}
            Essential enterprise features such as high availability and sharding
            are provided
          </p>
        </p>
        <img
          src={key_features}
          alt="key features"
          className="md:w-3/4 pt-5 pb-10"
        />
      </div>



      <div className=" bg-gray-100 flex flex-col items-center px-5 md:pb-20 pb-10">
        <p className="pt-20 md:text-3xl text-2xl font-bold text-gray-900">
          AgensSQL DB Engine
        </p>
        <p className="pt-2 md:text-xl text-lg font-bold text-gray-600 underline underline-offset-1">
          Enhanced Data Security
        </p>
        <p className="text-center text-sm md:text-[16px] md:pb-5  pt-10 text-gray-600 ">
          AgensSQL is a PostgreSQL-based DBMS
          <p className="pt-1">
            {" "}
            that guarantees optimal security and stability.
          </p>
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-5 ">
          <div className=" flex flex-col justify-center items-center group bg-white border hover:border-blue-700 shadow hover:shadow-lg  rounded-lg duration-500 w-full mt-5 relative cursor-default md:ml-10  ">
            <img
              src={password_profile}
              alt=""
              className="md:w-80  group-hover:opacity-0 duration-500 px-20 py-10 md:px-10 md:py-5"
            />
            <ol className="opacity-0 group-hover:opacity-100 text absolute  duration-300 transition-all ease-in list-disc text-gray-600 md:text-sm ml-10 px-5">
              <li>user password policy reinforces login security</li>
              <li>excessive failed login attempts lock an account</li>
              <li>define rules for password complexity</li>
            </ol>
          </div>

          <div className="flex flex-col justify-center items-center group bg-white border hover:border-blue-700 shadow hover:shadow-lg  rounded-lg duration-500 w-full mt-5 relative cursor-default md:ml-10 ">
            <img
              src={data_reduction}
              alt=""
              className="md:w-80  group-hover:opacity-0 duration-500 px-20 py-10 md:px-10 md:py-5"
            />
            <ol className="opacity-0 group-hover:opacity-100 text absolute  duration-300 transition-all ease-in list-disc text-gray-600 md:text-sm ml-10 px-5">
              <li>enhanced data security of user personal information</li>
              <li>resolve privacy issues in preparation for security audits</li>
              <li>
                encryption or masking with unidentifiable special characters
              </li>
            </ol>
          </div>

          <div className="flex flex-col justify-center items-center group bg-white border hover:border-blue-700 shadow hover:shadow-lg  rounded-lg duration-500 w-full mt-5 relative cursor-default md:ml-10">
            <img
              src={auditing}
              alt=""
              className="md:w-80  group-hover:opacity-0 duration-500 px-20 py-10 md:px-10 md:py-5"
            />
            <ol className="opacity-0 group-hover:opacity-100 text absolute   duration-300 transition-all ease-in list-disc text-gray-600 md:text-sm ml-10 px-5">
              <li>monitors database activities and collects data</li>
              <li>
                traces object accessed or DDL & DML statements executed by a
                user
              </li>
              <li>records all actions in logs</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyFeatures