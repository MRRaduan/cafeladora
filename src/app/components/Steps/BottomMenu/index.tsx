type TBottomMenuProps = {
  nextStep: Function;
  previousStep: Function;
  nextButtonText?: string;
};

const BottomMenu = ({
  nextStep,
  previousStep,
  nextButtonText,
}: TBottomMenuProps) => {
  const handleNextStep = () => {
    nextStep({ intensity: "a" }, "CALCULATING");
  };
  const handlePreviousStep = () => {
    previousStep("METHOD");
  };
  return (
    <div className="bg-base-100 fixed w-full flex items-center bottom-0 border-t-2 border-normal-300 shadow-lx z-20 p-2">
      <div className="container md:w-4/12 mx-auto flex items-center justify-center">
        {/* <button className="btn btn-circle" onClick={() => previousStep()}>
          <svg
            className="h-6 w-6 fill-current md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
          </svg>
        </button> */}
        <button
          className={`btn btn-primary text-white ml-2 w-8/12`}
          onClick={() => nextStep()}
        >
          {nextButtonText ? nextButtonText : "AVANÇAR"}
        </button>
      </div>
    </div>
  );
};

export default BottomMenu;
