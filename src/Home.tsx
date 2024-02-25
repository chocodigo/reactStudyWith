import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { Notion } from "./Notion";

const Home = () => {
  const NOTION_PAGE_ID = "Study-3dde10f909704223980a9e67fb551090";

  return <Notion id={NOTION_PAGE_ID} />;
};

export default Home;
