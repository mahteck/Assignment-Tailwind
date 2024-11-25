import Image from "next/image";

export default function Home() {
  return (

    // Class Code
    // <div className="bg-gray-400 flex flex-col md:flex-row justify-center items-center">
    //   <div className="bg-red-500 h-40 w-[25%] flex-1">Shoaib Munir, Software Engineer.</div>
    //   <div className="bg-blue-500 h-40 w-[25%] flex-grow">Shoaib Munir, Software Engineer.</div>
    //   <div className="bg-green-500 h-40 w-[25%] flex-1">Shoaib Munir, Software Engineer.</div>
    // </div>

    // as per requirement
    // main div

    <div className="flex flex-col items-center justify-center md:items-stretch md:flex-wrap lg: flex-nowrap">
      {/* // first div in complete row*/}
      <div className="bg-red-500 text-white h-[160px] w-full lg:h-80">Shoaib Munir, Software Engineer.</div>

      {/* // second and third div in same row*/}
      <div className="flex flex-col md:flex-row w-full md:w-full md:justify-between">
        <div className="bg-blue-500 text-white h-40 w-full md:h-80 md:w-1/2">Shoaib Munir, Software Engineer.</div>
        <div className="bg-green-500 text-white h-40 w-full md:h-80 md:w-1/2">Shoaib Munir, Software Engineer.</div>
      </div>

    </div>

  );
}
