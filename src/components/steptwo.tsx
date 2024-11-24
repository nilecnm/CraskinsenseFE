"use client";

import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { PredictedMaskResponse } from "@/app/task/page";

interface Props {
  setStepFn: Dispatch<SetStateAction<number>>;
  photo: string | null;
  setResultFn: Dispatch<SetStateAction<PredictedMaskResponse | null>>;
  file: File | null;
}

enum Status {
  Ready,
  Processing,
}

export default function StepTwo({
  setStepFn,
  photo,
  setResultFn,
  file,
}: Props) {
  const [status, setStatus] = useState(Status.Ready);
  const handleVisualization = async () => {
    console.log(file);
    if (file) {
      try {
        setStatus(Status.Processing);
        const formData = new FormData();

        formData.append("file", file);

        // ส่งคำขอไปยัง API
        const response = await axios.post(
          "https://craskinsense-be-959292480377.asia-northeast3.run.app/api/predict",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (response.status === 200) {
          response.data.predicted_mask_base64 = `data:image/png;base64,${response.data.predicted_mask_base64}`;
          setResultFn(response.data);
          setStepFn(3);
        } else {
          console.error("Failed to fetch image from API");
        }
      } catch (error) {
        console.error("Error fetching visualization data:", error);
      }
    } else {
      setResultFn(file); // กลับไปแสดงภาพต้นฉบับ
    }
  };

  return (
    <>
      <div className="isolate bg-white px-6 py-8 sm:py-16 lg:px-8 -z-10">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            STEP 2: DAMAGE ANALYSE
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            After selecting your image, click the &quot;Damage Analyse&quot;
            button to begin and wait for the CRA SkinSense AI to analyze the
            damage from the uploaded image.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white text-gray-900">
        {/* Main Container */}
        <div className="container mx-auto px-4 py-8">
          {/* Top Section with Image and Data */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section (40%) */}
            <div className="relative flex-2 flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-lg w-full md:w-2/5">
              <div className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 overflow-hidden relative">
                {photo && (
                  <img
                    src={photo}
                    alt="Uploaded Preview"
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}
                {/* Overlay Loading Indicator */}
                {status === Status.Processing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                    <div className="loader"></div>
                  </div>
                )}
              </div>
              <button
                onClick={handleVisualization}
                className="inline-flex justify-center items-center py-3 px-5 mt-4 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto text-center"
                disabled={status === Status.Processing}
              >
                {status === Status.Ready ? "Damage Analyse" : "Processing..."}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS สำหรับตัวโหลด */}
      <style jsx>{`
        .loader {
          border: 8px solid #f3f3f3; /* สีเทาอ่อน */
          border-top: 8px solid #3498db; /* สีฟ้า */
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
