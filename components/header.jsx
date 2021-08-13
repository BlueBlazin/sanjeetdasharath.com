import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="h-14 p-3 flex justify-center items-center text-gray-500 bg-gray-200 sm:hidden">
        <div className="flex-1 text-center">
          <Link href="/">
            <a className="px-3 py-2">Home</a>
          </Link>
        </div>
        <div className="ml-auto w-5 text-center">v</div>
      </div>
      <div className="h-16 p-3 hidden sm:block">My header</div>
    </>
  );
}
