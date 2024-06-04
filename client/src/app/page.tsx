import Add from "./add/page";
import Book from "./book/page";
import View from "./view/page";


export default function Home() {
  return (
    <main className="min-h-screen">
        <Book></Book>
        <Add></Add>
        <View></View>
    </main>
  );
}
