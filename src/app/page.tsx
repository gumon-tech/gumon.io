import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex-col flex items-center">
        <div className="">
          <Image
            src="/assets/icon4.4.png"
            width={300}
            height={300}
            alt="Gumon maintain"
          />
        </div>

        <div className="text-4xl font-bold mb-5">GUMON IS COMING SOON!</div>
        {/* <div className="text-xl font-bold">principle</div> */}
        {/* <ol className="text-lg text-center">
          <li>Software must utilize a Microservice Architecture.</li>
          <li>
            Each service must be able to support multitasking across multiple
            apps simultaneously.
          </li>
        </ol> */}
        <span className="m-4">
          <a href="mailto:contact@gumon.io">contact@gumon.io</a> 
        </span>
      </div>
    </main>
  );
}
