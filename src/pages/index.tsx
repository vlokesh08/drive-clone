import Head from "next/head";
import Link from "next/link";
import Button from "~/components/common/Button";
import FetchSession from "~/hooks/FetchSession";
import HomePage from "~/components/Home";

export default function Home() {
  let session  = FetchSession();
  return (
    <>
      <HomePage />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        
        
      </div>
    </>
  );
}
