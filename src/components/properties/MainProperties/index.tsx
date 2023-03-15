import Link from "next/link";

function MainProperties() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium text-zinc-800/90">
          All Properties
        </h1>

        <Link
          href={"/properties/create"}
          className="flex items-center gap-2 bg-[#4d45ef] text-white py-0.5 px-4 rounded-lg
          transition-colors duration-300 hover:bg-green-600"
        >
          <span className="text-2xl">+</span> Add Property
        </Link>
      </div>
    </>
  );
}

export default MainProperties;
