import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PrimeiroForm from "./forms/Primeiroform";
import SegundoForm from "./forms/SegundoForm";
import "./stepper.css";
import { TiTick } from "react-icons/ti";

const Stepper = () => {
  const steps = ["", "Dados Pessoais", "Outros Dados"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const { control, handleSubmit } = useForm();
  const pageDisplay = () => {
    if (currentStep === 1) {
      return <PrimeiroForm control={control} name="times" />;
    } else if (currentStep === 2) {
      return <SegundoForm mask="99/99/9999" placeH="CPF" />;
    } else if (currentStep === 3) {
      return <p className="text-white">Finalizar?</p>;
    }
  };
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
          </div>
        ))}
      </div>
      <div className="header">{steps[currentStep]}</div>
      <div className="body">{pageDisplay()}</div>
      {!complete && (
        <>
          <div className="bg-white"></div>
          <button
            className="btn"
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep === steps.length ? "Editar" : "Proximo"}
          </button>
          {/* <button
            className="btn"
            disabled={currentStep == 1}
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((anterior) => anterior - 1);
            }}
          >
            Voltar
          </button> */}
        </>
      )}
    </>
  );
};

export default Stepper;
