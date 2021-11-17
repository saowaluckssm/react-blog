import Bloglist from "./Bloglist";
import useFetch from "./usefetch";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && <Bloglist blogs={data} title="All Blogs" />}

      {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blog"
      /> */}
    </div>
  );
};

export default Home;
