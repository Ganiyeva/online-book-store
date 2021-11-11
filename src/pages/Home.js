import Advertising from '../components/Advertising/Advertising'
import { BookGrid } from '../components/BookGrid.js/BookGrid';
import Bookcard from '../components/Books/Bookcard'
const Home = () => {
  return (
    <div>
        <Advertising/>
        <Bookcard/>
        <BookGrid/>
    </div>
  );
};

export default Home;