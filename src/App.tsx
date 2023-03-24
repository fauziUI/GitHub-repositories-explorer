import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import ListUser from "./components/ListUser";

export default function App() {
  const [listUser, setListUser] = useState<{ login: string }[]>([]);
  const [loadingUser, setLoadingUser] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      setLoadingUser(true);
      axios
        .get(
          `https://api.github.com/search/users?q=${query}&page=1&per_page=100`
        )
        .then((res) => {
          const filter = res.data.items.filter((e: { login: string }) => {
            return e.login.includes(`${query}`);
          });
          setListUser(filter);
          setLoadingUser(false);
        })
        .catch((err) => console.log(err));
    }
  }, [query]);

  return (
    <>
      <Navbar />

      <Search setQuery={setQuery} />

      {loadingUser ? (
        <div className="max-w-5xl m-auto p-8 text-2xl">Loading...</div>
      ) : (
        <ListUser listUser={listUser} />
      )}
      <Footer />
    </>
  );
}
