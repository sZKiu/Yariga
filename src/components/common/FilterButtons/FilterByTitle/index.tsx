import React from "react";

export default function FilterByTitle({
  onChange,
  value,
}: {
  onChange: (x: string) => void;
  value: string;
}) {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      type="text"
      value={value}
      placeholder="Search by title"
      required={false}
      className="w-full h-full min-w-[200px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border text-sm px-3 py-[6px] rounded-[7px] border-blue-gray-200 focus:border-indigo-500"
    />
  );
}

// import React from "react";
// import CustomInput from "../../CustomInput";

// export default function FilterByTitle(props: any) {

//   console.log(props)

//   return (
//     <CustomInput
//       type="text"
//       variant="outlined"
//       label="Search by title"
//       required={false}
//       field={props}
//       className=""
//     />
//   );
// }
