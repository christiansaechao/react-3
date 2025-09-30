import { useLoaderData } from "react-router-dom";

export default function Home() {
  // const data = useLoaderData?.();
  return (
    <div>
      <h2>Home Page</h2>
      <div>Welcome to the homepage</div>
      {/* {data?.message && <p>Loader says: {data.message}</p>} */}
    </div>
  );
}