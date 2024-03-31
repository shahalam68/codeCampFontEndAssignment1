// const inter = Inter({ subsets: ["latin"] });

import { BookList } from "@/components/BookList";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <BookList/>
      </main>
    </>
  );
}
