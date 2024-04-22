import Eventlist from "./Components/Eventlist";
import Layout from "./Components/Layout";
import { getFeaturedEvents } from "../../dummy-data";

export default function Home() {
  const  featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <Layout>
      <div className="bg-grey-500 my-5">
        <Eventlist featuredEvents={featuredEvents} />
      </div>
    </Layout>
  );
}
