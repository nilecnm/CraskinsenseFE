"use client";

import React, { useRef, Dispatch, SetStateAction } from "react";

interface Props {
  setStepFn: Dispatch<SetStateAction<number>>;
  setPhotoFn: Dispatch<SetStateAction<string | null>>;
  setFileFn: Dispatch<SetStateAction<File | null>>;
}

export default function StepOne({ setStepFn, setPhotoFn, setFileFn }: Props) {
  function CameraUpload() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    // ฟังก์ชันสำหรับอัปโหลดรูปจากกล้องหรืออัลบั้มรูป
    const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setPhotoFn(imageUrl);
        setFileFn(file);
        setStepFn(2);
      }
    };

    // ฟังก์ชันเปิด input เมื่อกดปุ่ม
    const openCamera = () => {
      inputRef.current?.click();
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
              STEP 1: UPLOAD IMAGE
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Now, let&apos;s upload an image. The supported image formats are
              PNG, JPG and TIF or upload an image through the camera by clicking
              the button &quot;Upload From Camera&quot; below.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white text-gray-900">
          {/* Main Container */}
          <div className="container mx-auto px-4 py-8">
            {/* Top Section with Image and Data */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Image Section (40%) */}
              <div className="flex-2 flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-lg w-full md:w-2/5">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, TIF</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleCapture}
                  />
                </label>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment" // หรือ "user" สำหรับกล้องหน้า
                    onChange={handleCapture}
                    style={{ display: "none" }}
                    ref={inputRef} // ใช้ ref เพื่อเข้าถึง input
                  />
                  <button
                    onClick={openCamera}
                    className="inline-flex justify-center items-center py-3 px-5 mt-4 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto text-center"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 mr-1.5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Upload From Camera
                  </button>
                  {/* <button>snap</button> เพิ่มปุ่ม snapshot แยกกับปุ่ม*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <CameraUpload />;
}
