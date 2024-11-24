import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="isolate bg-white px-6 py-8 sm:py-16 ;g:px-8 -z-10">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-xl font-semibold leading-8 text-gray-900 sm:text-2xl ">
            Welcome to
          </p>
          <h2 className="mb-6  text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            CRA SKINSENSE AI
          </h2>
          <p className="mb-6 mx-12 font-semibold text-lg leading-8 text-gray-900">
            Advance Automated Solutions for Precise Skin Damage Evaluation
          </p>
        </div>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="/task"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto text-center"
          >
            Start Analyzing
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            src="https://www.youtube.com/embed/ZUFCgLdm0nI"
            title="overview"
            className="responsive-video rounded-xl shadow-xl ring-1 ring-gray-400/10"
            style={{
              aspectRatio: "16/9",
              border: "none",
              height: "auto",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <style>
            {`
      .responsive-video {
        width: 100%;
        max-width: 60%; /* Default: 60% of full width for desktop */
      }

      @media (max-width: 768px) {
        .responsive-video {
          max-width: 90%; /* 90% of full width for mobile */
        }
      }
    `}
          </style>
        </div>
      </div>
      <Footer />
    </div>
  );
}
