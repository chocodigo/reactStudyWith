import axios from "axios";
import { useEffect, useState } from "react";

export const useNotion = (NOTION_PAGE_ID: string) => {
  const [response, setResponse] = useState();

  useEffect(() => {
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);

  return { response };
};
