import { useCallback, useRef, useState } from "react";

export const Chapter12 = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
    },
    [form]
  );

  return <>Chapter12</>;
};
