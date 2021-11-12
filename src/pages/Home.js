import Advertising from "../components/Advertising/Advertising";
import BookList from "../components/Books/Booklist";

const Home = () => {
  return (
    <div>
      <Advertising />
      <BookList type='love' title='Love' />
      <BookList type='feminism' title='Feminism' />
      <BookList type='inspirational' title='Inspirational' />
    </div>
  );
};

export default Home;