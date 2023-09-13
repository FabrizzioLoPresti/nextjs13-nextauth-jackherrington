"use client";
import { useState } from "react";

type Props = {
  whoAmIAction: () => Promise<string>;
};

const ServerActionButton = (props: Props) => {
  const [name, setName] = useState<string>("");
  return (
    <div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={async () => {
          const name = await props.whoAmIAction();
          setName(name);
        }}
      >
        ServerActionButton
      </button>
      <p>{name}</p>
    </div>
  );
};

export default ServerActionButton;
