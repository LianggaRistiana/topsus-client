"use client"

import { ModeToggle } from "../atoms/mode-toggle";
import StepGroup from "./step-group";
import { usePathname } from 'next/navigation';

type NavbarProps = {
    title?: string;
};

const steps: StepItem[] = [
    { no: 1, title: "Susun cerita dan voice over", href: "/add-story" },
    { no: 2, title: "Pilih adegan video", href: "/edit-scene" },
    { no: 3, title: "Export video", href: "/export-video" },
]

export default function Navbar({ title = "Imaginary" }: NavbarProps) {

    const pathname = usePathname();

    const currentStep = steps.find(step => step.href === pathname);
    const focusStep = currentStep?.no ?? 0;
    const displayTitle = currentStep?.title ?? title;

    return (
        <nav className="fixed top-0 w-full gap-4 z-50 flex items-center justify-between py-4 px-4 lg:px-12 xl:px-24 backdrop-blur-lg bg-background/80 border-b">
            <StepGroup
                currentStep={2}
                focusStep={focusStep}
                steps={steps}
            />

            <p className="absolute left-1/2 -translate-x-1/2 text-lg font-bold text-primary">
                {/* {title} */}
                {displayTitle}
            </p>

            <ModeToggle />
        </nav>
    );
}
