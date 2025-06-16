import { ModeToggle } from "../atoms/mode-toggle";
import StepButton from "../atoms/step-button";
import StepGroup from "./step-group";

type NavbarProps = {
    title?: string;
};

export default function Navbar({ title = "Imaginary" }: NavbarProps) {
    return (
        <nav className="fixed top-0 w-full gap-4 z-50 flex items-center justify-between py-4 px-4 lg:px-12 xl:px-24 backdrop-blur-lg bg-background/80 border-b">
            <StepGroup
                currentStep={3}
                focusStep={3}
                steps={[
                    { title: "Pilih Paket", href: "/step-1" },
                    { title: "Isi Data", href: "/step-2" },
                    { title: "Pembayaran", href: "/step-3" },
                    { title: "Selesai", href: "/step-4" },
                    { title: "Selesai", href: "/step-5" },
                ]}
            />

            <p className="absolute left-1/2 -translate-x-1/2 text-xl font-bold text-primary">
                {title}
            </p>

            <ModeToggle />
        </nav>
    );
}
