// import Eventlist from "./Components/Eventlist";
import Layout from "./Components/Layout";
// import { getFeaturedEvents } from "../../dummy-data";

export default function Home() {
  // const  featuredEvents = getFeaturedEvents();
  return (
    <Layout>
      <div className="bg-grey-500 my-5">
        <h1 className="text-3xl font-bold text-center py-4">hi i am a index page </h1>
        {/* <Eventlist featuredEvents={featuredEvents} /> */}
      </div>
    </Layout>
  );
}
