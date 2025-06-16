import Navbar from "@/components/molecules/navbar";


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="pt-20">
            <Navbar />
            {children}
        </div>
    );
}