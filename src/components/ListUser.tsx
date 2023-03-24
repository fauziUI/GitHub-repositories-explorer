import axios from "axios";
import { useState } from "react";
import { IconDown } from "../assets/IconDown";
import { IconUp } from "../assets/IconUp";

export default function ListUser({ listUser }: { listUser: { login: string }[] }) {
  const [active, setActive] = useState<number | null>();
  const [listRepo, setListRepo] = useState([]);
  const [loadingRepo, setLoadingRepo] = useState(false);

  const handleClick = (i: number, e: string) => {
    if (i === active) setActive(null);
    else {
      setLoadingRepo(true);
      setListRepo([]);
      setActive(i);
      axios
        .get(`https://api.github.com/users/${e}/repos`)
        .then((res) => {
          console.log(res.data);
          setListRepo(res.data);
          setLoadingRepo(false);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      {listUser.map((e: { login: string }, i: number) => {
        return (
          <div className="max-w-5xl m-auto border-y " key={i}>
            <div
              onClick={() => handleClick(i, e.login)}
              className="flex items-center justify-between hover:bg-gray-100 cursor-pointer p-4 font-semibold text-2xl"
            >
              {e.login} {active === i ? <IconUp /> : <IconDown />}
            </div>
            {active === i ? (
              loadingRepo ? (
                <div>Loading...</div>
              ) : listRepo.length > 0 ? (
                listRepo.map((x: { name: string; language: string }, y) => {
                  return (
                    <div key={y} className="py-4 px-8 grid grid-cols-4 gap-2">
                      <div className="col-span-3">{`${y + 1}. ${x.name}`}</div>
                      {x.language ? <div>{x.language}</div> : <div>-</div>}
                    </div>
                  );
                })
              ) : (
                <div className="p-4">There is no repository</div>
              )
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
