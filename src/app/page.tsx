// Redireciona automaticamente para /home
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/home");
}
