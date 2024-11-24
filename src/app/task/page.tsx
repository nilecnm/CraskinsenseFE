"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import StepOne from "@/components/stepone";
import StepThree from "@/components/stepthree";
import StepTwo from "@/components/steptwo";

export type PredictedMaskResponse = {
  overlayed_image: string;
  density_plot: string;
  avg_value: number;
  max_value: number;
  min_value: number;
  number_point: number;
};

export default function Task() {
  const [step, setStep] = useState(1);
  const [photo, setPhoto] = useState<string | null>(null);
  const [result, setResult] = useState<PredictedMaskResponse | null>(null);
  const [file, setFile] = useState<File | null>(null);

  return (
    <div>
      <Navbar />
      {step == 1 && (
        <StepOne
          setStepFn={setStep}
          setPhotoFn={setPhoto}
          setFileFn={setFile}
        />
      )}
      {step == 2 && (
        <StepTwo
          setStepFn={setStep}
          photo={photo}
          setResultFn={setResult}
          file={file}
        />
      )}
      {step == 3 && <StepThree photo={photo} result={result} />}
      <Footer />
    </div>
  );
}
