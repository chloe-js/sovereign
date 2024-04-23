import Add from "./add/page";
import Book from "./book/page";


export default function Home() {
  return (
    <main className="min-h-screen">
        <Book></Book>
        <Add></Add>
    </main>
  );
}
