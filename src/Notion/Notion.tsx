import { NotionRenderer } from "react-notion";
import { useNotion } from "./useNotion";

interface NotionProps {
  id: string;
}

export const Notion = ({ id }: NotionProps) => {
  const { response } = useNotion(id);

  return response ? (
    <NotionRenderer blockMap={response} fullPage={true} />
  ) : (
    <></>
  );
};
