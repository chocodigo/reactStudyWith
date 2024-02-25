import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import axios from "axios";
import { NotionRenderer } from "react-notion";

const Home = () => {
  const [response, setResponse] = useState();
  const NOTION_PAGE_ID = "Study-3dde10f909704223980a9e67fb551090";

  useEffect(() => {
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  });

  return response ? (
    <NotionRenderer blockMap={response} fullPage={true} />
  ) : (
    <></>
  );
};

export default Home;
