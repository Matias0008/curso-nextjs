import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function PrincingPage() {
  return (
    <MainLayout>
      <div>
        <h1>Pricing Page</h1>
        <h1>
          Ir a <Link href="/">Home</Link>
        </h1>
      </div>
    </MainLayout>
  );
}
