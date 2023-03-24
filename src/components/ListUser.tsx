import { useState } from "react";
import { IconDown } from "../assets/IconDown";
import { IconUp } from "../assets/IconUp";
import ListRepo from "./ListRepo";

export default function ListUser({
  listUser,
}: {
  listUser: { login: string }[];
}) {
  const [active, setActive] = useState<number[]>([]);

  const handleClick = (i: number, e: string) => {
    if (active.includes(i)) {
      const newActive: number[] = [];
      active.forEach((e) => {
        if (e !== i) newActive.push(e);
      });
      setActive(newActive);
    } else setActive([...active, i]);
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
              {e.login} {active.includes(i) ? <IconUp /> : <IconDown />}
            </div>

            {active.includes(i) && <ListRepo userName={e.login} />}
          </div>
        );
      })}
    </div>
  );
}
