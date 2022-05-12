import logo from './logo.svg';
import './App.css';

function App() {
    const lg = "container h-[320px] bg-red-400 grid grid-cols-1 md:grid-cols-2  gap-5"
  return (
    <article id='banner' className='w-[100vw] bg-blue-500 flex justify-center items-center h-[600px]'>
        <div className={lg}>
            <div id='ele1' className='w-full h-full bg-green-300 hover:bg-purple-500 transition-all duration-1000'></div>
            <div id='ele1' className='w-full h-full bg-green-300'></div>
            <div id='ele1' className='w-full h-full bg-green-300'></div>
        </div>
    </article>
  );
}

export default App;
