import Advertising from "../components/Advertising/Advertising";
import BookList from "../components/Books/Booklist";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Advertising />
      <BookList />
      <Footer/>
    </div>
  );
};

export default Home;