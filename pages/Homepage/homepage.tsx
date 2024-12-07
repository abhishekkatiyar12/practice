import Navbar from "../Navbar/navbar";


export default function Homepage({points,onclick}:any) {
   

    return (
        <>
            <Navbar points={points} onClick={onclick}/>
            <div>points:{points}</div>
        </>
    );
}
