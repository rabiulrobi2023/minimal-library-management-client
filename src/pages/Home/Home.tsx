import Banner from "@/Layout/Banner/Banner";
import { useGetbooksQuery } from "@/redux/api/baseApi";
import Books from "../Book/Books";

const Home = () => {
  const { data } = useGetbooksQuery(undefined);
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default Home;
