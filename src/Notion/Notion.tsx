import { NotionRenderer } from "react-notion";
import { useNotion } from "./useNotion";
import { Stack } from "@mui/material";

interface NotionProps {
  id: string;
}

export const Notion = ({ id }: NotionProps) => {
  const { response } = useNotion(id);

  return (
    <Stack sx={{ padding: "16px" }}>
      {response ? (
        <NotionRenderer blockMap={response} fullPage={true} />
      ) : (
        <></>
      )}
    </Stack>
  );
};
