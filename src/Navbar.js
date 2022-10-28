import "./index.css";
const navbar = () => {
    return (
        <div className="navbar" >
            <h1> The Dojo Blog</h1>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#000000',
                    borderRadius: '4px'
                }}>New Blog</a>
            </div>
        
        </div>
    
    );
}
export default navbar;