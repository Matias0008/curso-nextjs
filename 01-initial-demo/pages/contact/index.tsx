import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <div>
        <h1>Contact page</h1>
        <h1>
          Ir a <Link href="/">Home</Link>
        </h1>
      </div>
    </MainLayout>
  );
}
