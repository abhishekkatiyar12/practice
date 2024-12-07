
export default  function Navbar({points,onclick}:any){
  
    return (
        <>
        <div>NavBar</div>
        <button onClick={onclick}> This is navBar == points:{points}</button>
        </>
    )
}