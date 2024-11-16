"use client";

import { useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

interface Props {
  photo: string | null;
  result: string | null;
}

const Controls = () => {
  const { zoomIn, zoomOut } = useControls();

  return (
    <>
      <button
        className="bg-gray-200 font-medium py-3 px-5 mt-4 rounded-lg shadow-md hover:bg-gray-300 "
        onClick={() => zoomIn()}
      >
        Zoom In
      </button>
      <button
        className="bg-gray-200 font-medium py-3 px-5 mt-4 rounded-lg shadow-md hover:bg-gray-300 "
        onClick={() => zoomOut()}
      >
        Zoom Out
      </button>
    </>
  );
};

export default function StepThree({ photo, result }: Props) {
  const [isVisualization, setIsVisualization] = useState(false);

  return (
    <>
      <div className="isolate bg-white px-6 py-8 sm:py-16 ;g:px-8 -z-10">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            STEP 3: REVIEW RESULT
          </h2>
          {/* <p className="mt-2 text-lg leading-8 text-gray-600">
            Ready to start your next project with us? Send us a message and we
            will get back to you as soon as possible!
          </p> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white text-gray-900">
        {/* Main Container */}
        <div className="container mx-auto px-4 py-8">
          {/* Top Section with Image and Data */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section (40%) */}
            <div className="flex-2 flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-lg w-full md:w-2/5">
              <TransformWrapper>
                {({}) => (
                  <>
                    <TransformComponent>
                      {isVisualization ? (
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          {photo && (
                            <img
                              src={photo}
                              alt="Uploaded Preview"
                              className="w-full h-full object-contain rounded-lg"
                            />
                          )}
                        </label>
                      ) : (
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          {result && (
                            <img
                              src={result}
                              alt="Uploaded Preview"
                              className="w-full h-full object-contain rounded-lg"
                            />
                          )}
                        </label>
                      )}
                    </TransformComponent>
                    <div className="flex flex-row gap-4 mt-4 ">
                      <Controls />
                      <button
                        onClick={() => setIsVisualization(!isVisualization)}
                        className="inline-flex justify-center items-center py-3 px-5 mt-4 text-base font-medium text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full shadow-md sm:w-auto text-center"
                      >
                        {isVisualization ? "Visualization" : "Original"}
                      </button>
                    </div>
                  </>
                )}
              </TransformWrapper>
            </div>

            {/* Data and Chart Section (60%) */}
            <div className="flex flex-col bg-white rounded-lg shadow-md w-full md:w-3/5">
              <div className="flex flex-col sm:flex-row p-4 gap-2 w-full">
                {/* Data Cards */}
                <div className="bg-white w-full sm:w-1/2 md:w-1/4 p-4 rounded-lg text-center shadow-md mb-4 md:mb-0">
                  <p>Number of Evaluated Points</p>
                </div>
                <div className="bg-white w-full sm:w-1/2 md:w-1/4 p-4 rounded-lg text-center shadow-md mb-4 md:mb-0">
                  <p>Maximum Thickness Values</p>
                </div>
                <div className="bg-white w-full sm:w-1/2 md:w-1/4 p-4 rounded-lg text-center shadow-md mb-4 md:mb-0">
                  <p>Average Thickness Values</p>
                </div>
                <div className="bg-white w-full sm:w-1/2 md:w-1/4 p-4 rounded-lg text-center shadow-md">
                  <p>Minimum Thickness Values</p>
                </div>
              </div>

              {/* Chart Section */}
              <div className="bg-white p-4 rounded-lg mt-4 shadow-md">
                <h2 className="text-center mb-4">
                  Distribution of Damage Analysis
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Placeholder for Box Plot */}
                  <div className="bg-white p-2 rounded-lg shadow-md">
                    <p className="text-center">Box Plot Placeholder</p>
                  </div>
                  {/* Placeholder for Histogram */}
                  <div className="bg-white p-2 rounded-lg shadow-md">
                    <p className="text-center">Histogram Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
