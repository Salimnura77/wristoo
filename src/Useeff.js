import { useEffect,useState } from "react";

const Useeff = () => {
    const [bin, setbin] = useState(0);

    useEffect(() => {}, []);

    return (
        <div className='bin'>
            <h3>can you help me count: {bin}</h3>
            <button onClick={() => setbin(bin + 1)}>
                add please
            </button>
        </div>
    );
}
 
export default Useeff;