import StepButton from "../atoms/step-button";



export default function StepGroup() {
    return (
        <div className="flex relative justify-between w-fit items-center">
            <StepButton isActive={true} >1</StepButton>
            <div className="w-[20px] h-[5px] bg-primary"></div>
            <StepButton isActive={true} >2</StepButton>
            <div className="w-[20px] h-[5px] bg-secondary"></div>
            <StepButton isActive={false} >3</StepButton>
            <div className="w-[20px] h-[5px] bg-secondary"></div>
            <StepButton isActive={false} >4</StepButton>
            <div className="w-[20px] h-[5px] bg-secondary"></div>
            <StepButton isActive={false} >5</StepButton>
        </div>
    )
}