import { ModeToggle } from "../atoms/mode-toggle";
import StepButton from "../atoms/step-button";
import StepGroup from "./step-group";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full gap-4 z-50 flex items-center justify-between py-4 px-4 lg:px-12 xl:px-24 backdrop-blur-lg bg-background/80 border-b ">
            <p  className="text-xl font-bold text-primary">
                Imaginary
            </p>
            <StepGroup />
            <ModeToggle />
            
        </nav>
    );
}