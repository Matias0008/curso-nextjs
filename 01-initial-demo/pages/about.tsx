import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <div>
        <h1>About page</h1>
        <h1>
          Ir a <Link href="/">Home</Link>
        </h1>
      </div>
    </MainLayout>
  );
}
