import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen px-14 py-8 bg-coca-faces bg-contain bg-repeat">
        {/* ADMIN LINK */}
        <a
          className="absolute right-0 bottom-0 m-4"
          href="mailto:infococcaaina@gmail.com"
        >
          <img
            className="w-[4rem] rounded-full hover:scale-105 duration-150"
            src="./static/imgs/admin.jpg"
          />
        </a>

        {/* SLOGAN */}
        <div className="w-full relative text-center mx-auto">
          <a
            className="text-xs md:text-md bg-black rounded-lg text-white duration-150 mx-auto font-light px-4 py-2 hover:scale-105"
            href="https://beacons.ai/coccaaina"
          >
            Stay Elevated
          </a>
        </div>

        {/* MAIN PAGE LINK */}
        <div className="h-full flex flex-col justify-center">
          <div className="relative my-2 mx-auto">
            <a
              className="text-md md:text-3xl bg-gray-200 text-black duration-150 mx-auto font-light px-4 py-2"
              href="https://beacons.ai/coccaaina"
            >
              Coccaaina Directory
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
