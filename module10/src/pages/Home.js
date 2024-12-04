import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const FetchData = () => {
  const fetchURL = "https://catfact.ninja/fact";

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => fetch(fetchURL).then((res) => res.json()),
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occured: " + error.message;

  const handleRefetch = () => {
    refetch();
  };

  return (
    <div>
      {" "}
      <p>{data.fact}</p>
      <button onClick={handleRefetch}>Update Data</button>
    </div>
  );
};

export const Home = () => {
  return (
    <h1>
      This is the home page and user is: <FetchData />
    </h1>
  );
};
