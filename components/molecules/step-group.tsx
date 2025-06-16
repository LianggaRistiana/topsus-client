import StepBridge from "../atoms/step-bridge";
import StepButton from "../atoms/step-button";

export default function StepGroup() {
    return (
        <div className="flex relative justify-between w-fit items-center">
            <StepButton isActive={false} isDone={true} >1</StepButton>
            <StepBridge isDone={true} />
            <StepButton isActive={true} isDone={true}>2</StepButton>
            <StepBridge isDone={false} />
            <StepButton isActive={false} isDone={false}>3</StepButton>
            <StepBridge isDone={false} />
            <StepButton isActive={false} isDone={false} >4</StepButton>
            <StepBridge isDone={false} />
            <StepButton isActive={false} isDone={false} >5</StepButton>
        </div>
    )
}