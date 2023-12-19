import useSWR from "swr";
import axios from "axios";

const AxiosExample = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <h1>Axios Example </h1>
      <h2>this is result of a fake API </h2>
      <div>
        {data.map((data) => {
          return <p key={data.id}>{data.name}</p>;
        })}
      </div>
    </>
  );
};

export default AxiosExample;
