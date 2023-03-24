import { useRef } from "react";

export default function Search({
  setQuery,
}: {
  setQuery: (e: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (inputRef.current?.value) setQuery(inputRef.current?.value);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="border-b py-20 w-full max-w-5xl m-auto px-4 md:px-12"
    >
      <div className="text-2xl">
        Search more than <span className="font-semibold">111M</span> users
      </div>
      <div className=" my-2 md:flex md:items-center md:justify-center">
        <input
          type="text"
          placeholder="Search Github"
          className="border rounded-md w-full p-2"
          ref={inputRef}
        />
        <button
          // onClick={handleSearch}
          type="submit"
          className="w-full md:w-16 md:mx-2 border my-2 py-2 bg-slate-50 text-sm font-medium rounded-lg hover:bg-slate-100"
        >
          Search
        </button>
      </div>
      <div className="text-sm">
        <span className="font-semibold">ProTip! </span>
        <span>For an </span>
        <span className=" text-blue-500 cursor-pointer hover:underline">
          advanced search{" "}
        </span>
        <span>use some of our </span>
        <span className=" text-blue-500 cursor-pointer hover:underline">
          prefixes
        </span>
      </div>
    </form>
  );
}
