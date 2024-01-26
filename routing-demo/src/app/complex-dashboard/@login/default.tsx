import Card from "@/components/card";
import Link from "next/link";

export default function DefaultLogin() {
    return (
        <Card>
            <div>Login</div>
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    )
}