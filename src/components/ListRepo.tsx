import axios from "axios";
import { useState, useEffect } from "react";

export default function ListRepo({ userName }: { userName: string }) {
  const [listRepo, setListRepo] = useState([]);
  const [loadingRepo, setLoadingRepo] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        console.log(res.data);
        setListRepo(res.data);
        setLoadingRepo(false);
      })
      .catch((err) => console.log(err));
  }, [userName]);

  return (
    <div>
      {loadingRepo && listRepo.length === 0 ? (
        <div>Loading...</div>
      ) : listRepo.length > 0 ? (
        listRepo.map((x: { name: string; language: string }, y) => {
          return (
            <div key={y} className="py-4 px-8 grid grid-cols-12 gap-2">
              <div>{y + 1}</div>
              <div className="col-span-9">{x.name}</div>
              {x.language ? (
                <div className="col-span-2">{x.language}</div>
              ) : (
                <div>-</div>
              )}
            </div>
          );
        })
      ) : (
        <div className="p-4">There is no repository</div>
      )}
    </div>
  );
}
