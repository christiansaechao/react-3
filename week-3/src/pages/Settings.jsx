import { useLoaderData } from "react-router-dom";

export default function Settings() {
  const data = useLoaderData?.();
  return (
    <div>
      <h2>Settings Page</h2>
      {data?.theme && <p>Current Theme: {data.theme}</p>}
    </div>
  );
}