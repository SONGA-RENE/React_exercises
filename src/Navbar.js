import "./index.css";
const Navbar = () => {
    return (
        <div className="Navbar" >
            <h1> The Dojo Blog</h1>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/create">New Blog</a>
            </div>
        
        </div>
    
    );
}
export default Navbar;