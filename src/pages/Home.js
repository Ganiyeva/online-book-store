<<<<<<< HEAD
import Advertising from "../components/Advertising/Advertising";
import BookList from "../components/Books/Booklist";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Advertising />
      <BookList />
      <Footer/>
=======
import Advertising from '../components/Advertising/Advertising'
import { BookGrid } from '../components/BookGrid.js/BookGrid';
import Bookcard from '../components/Books/Bookcard'
const Home = () => {
  return (
    <div>
        <Advertising/>
        <Bookcard/>
        <BookGrid/>
>>>>>>> e6b7b15b896d9cf0769125b500c131f45b6cd562
    </div>
  );
};

export default Home;