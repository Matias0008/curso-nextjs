import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <div>
        <h1>Home page</h1>
        <h1>
          Ir a <Link href="/about">About</Link>
        </h1>
      </div>
    </MainLayout>
  );
}
