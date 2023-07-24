import React from 'react'
import agensha from "../assets/agensha.png";

const data=[
    {
    title: 'Backup/Restore',
    items: [
    'provides a convenient interface for backup & restore',
    'provides backup & restore features for DB and table objects'
    ]
    },
    {
    title: 'DB Monitoring Dashboard',
    items: [
    'monitors real-time session & transaction lock',
    'provides status for server CPU & memory'
    ]
    },
    {
    title: 'Schedule Management',
    items: [
    'provides module for script, SQL job, and scheduling management',
    'provides UX dedicated to scheduling'
    ]
    },
    {
    title: 'Database Audit',
    items: [
    'enables auditing via user interface',
    'view audit results via user interface'
    ]
    },
    {
    title: 'SQL Monitoring',
    items: [
    'collects query statistics required for performance analysis',
    'extracts monitoring results in query'
    ]
    },
    {
    title: 'Performance Management',
    items: [
    'monitors and collects operation status & statistical data',
    'provides status reports required for improving performance'
    ]
    }
    ]

    const FlippableCard = ({ data }) => {
        return (
        <>
        {data.map(card => (
        <div className="flip-card md:w-3/4 w-full h-20 mt-2">
        <div className="flip-card-inner ">
        <div className="flip-card-front flex justify-center items-center border-[#0082cb] border-2 rounded-lg hover:border-none transition-all duration-500">
        <p className="text-lg text-[#0082cb]">{card.title}</p>
        </div>
        <div className="flip-card-back rounded-lg text-start flex items-center">
        <ol className="list-disc px-5 md:px-10 text-sm ">
        {card.items.map(item => <li>{item}</li>)}
        </ol>
        </div>
        </div>
        </div>
        ))}
        </>
        )
        }

function EnterprisePackage() {
  return (
    <div >
    <p className="pt-20 md:text-3xl text-2xl font-bold text-gray-900 text-center px-5">
      Agens Enterprise Package
    </p>
    <p className="text-center text-sm md:text-[16px] md:pb-5   text-gray-600 pt-3 px-5">
      Agens Enterprise Package comes with a high availability management
      server that
      <p className="pt-1 px-5">
        supports backup and data monitoring dashboard that helps enterprise
        customers manage their data efficiently.
      </p>
    </p>
    <div className="flex flex-col md:flex-row md:px-20 px-5 md:pt-10 pt-2 ">
      <div className="md:w-1/2 pb-10">
        <p className=" md:text-2xl text-xl font-bold text-gray-600 text-center">
          Agens HA Manager
        </p>
        <img src={agensha} alt="" className="mt-5" />
      </div>
      <div className="md:w-1/2 pb-10">
        <p className=" md:text-2xl text-xl font-bold text-gray-600 text-center">
          Agens Enterprise Manager{" "}
        </p>
        <div className="flex flex-col items-center mt-5">
            <FlippableCard data={data}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EnterprisePackage