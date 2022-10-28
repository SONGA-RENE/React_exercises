const Home = () => {
    const handleclick= () => {
      console.log  ('Hello, ninjas')
    }
    return ( 
        <div className="home">
           <h2>HomePage</h2> 
           <button onClick={handleclick}>Click me</button>
            </div>
     );
}
 
export default Home;