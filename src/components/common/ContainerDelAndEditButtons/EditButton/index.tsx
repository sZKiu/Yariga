import Link from "next/link";
import { BsFillPencilFill } from "react-icons/bs";

export default function EditButton({ propertyId }: { propertyId: string }) {
  return (
    <Link
      href={`/update/${propertyId}`}
      className="bg-[#4d45ef] w-[50%] py-2 px-6 text-white font-medium flex rounded-lg items-center gap-2 justify-center"
    >
      <BsFillPencilFill />
      Edit
    </Link>
  );
}
