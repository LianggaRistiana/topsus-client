import { cn } from "@/lib/utils"

export default function StepBridge({ isDone }: { isDone: boolean }) {
    return (
        <div className={cn("w-[20px] h-[5px]", isDone? "bg-primary" : "bg-secondary")}></div>
    )
}