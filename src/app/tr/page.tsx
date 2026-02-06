import { redirect } from "next/navigation";

export default function TrRoot() {
  // canonical entry is /
  redirect("/");
}
