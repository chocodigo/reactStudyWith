import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import { useNotion } from "./hooks/useNotion";

const Home = () => {
  const NOTION_PAGE_ID = "Study-3dde10f909704223980a9e67fb551090";

  const { response } = useNotion(NOTION_PAGE_ID);

  return response ? (
    <NotionRenderer blockMap={response} fullPage={true} />
  ) : (
    <></>
  );
};

export default Home;
