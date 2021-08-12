import Navbar from '../../components/Navbar';
import News from '../../components/News';
// import { Get } from '../../services/A
const Home: React.FC = () => {
  // const [data, setData] = useState([])

//   useEffect( () => {
//       Get('/teams').then((res) => setData(res.data.data))  
      
// }, [])
// console.log(data)
  return (
    <div className="Home">
      <Navbar />
      <News />
    </div>
  );
}

export default Home;
