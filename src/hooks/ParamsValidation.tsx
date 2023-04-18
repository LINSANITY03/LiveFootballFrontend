import { useParams } from "react-router-dom";
import Undirected from "@/pages/Undirected/Undirected";
import EachTourn from "@/pages/client/Tournament/Each_Tour/Index";

export function ValidateUser() {
  let params = useParams();
  let tournId = params.id?.match(/\d+/);
  if (!tournId) {
    return <Undirected />;
  } else {
    return <EachTourn tournId={params.id!} />;
  }

}
