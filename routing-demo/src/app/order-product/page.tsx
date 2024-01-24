"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleCLick = () => {
        console.log("Placing your order");
        router.push("/");
    }
    return (
        <>
            <h1>Order product</h1>
            <button onClick={handleCLick}>Place order</button>
        </>
    )
}