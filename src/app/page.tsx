
export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center md:items-stretch md:flex-wrap lg: flex-nowrap">
      <div className="bg-red-500 text-white h-[160px] w-full lg:h-80">Shoaib Munir, Software Engineer.</div>

      <div className="flex flex-col md:flex-row w-full md:w-full md:justify-between">
        <div className="bg-blue-500 text-white h-40 w-full md:h-80 md:w-1/2">Shoaib Munir, Software Engineer.</div>
        <div className="bg-green-500 text-white h-40 w-full md:h-80 md:w-1/2">Shoaib Munir, Software Engineer.</div>
      </div>

    </div>

  );
}
