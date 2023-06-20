import { useState } from "react";

const message = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [isOpen, setIsOpen] = useState(true);

  const [step, setStep] = useState(1);
  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }
  function handleNext() {
    if (step < 3) setStep((currentStep) => currentStep + 1);
  }

  function close() {
    setIsOpen((currentState) => !currentState);
  }

  return (
    <>
      <button className="close" onClick={close}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : null}>1</div>
            <div className={step >= 2 ? "active" : null}>2</div>
            <div className={step >= 3 ? "active" : null}>3</div>
          </div>
          <StepMessage step={step}>{message[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈🏽</span>Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉🏽</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3> Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
