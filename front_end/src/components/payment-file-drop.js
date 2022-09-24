import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Process from "./Return-process-level";

function FileDrop(props) {

    const handler = props.handler();
    const setInputs = props.setter();

    const handleChange = (event) => {
        const name = event.target.name;
        if(name !== "files") {
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        }
        else{
            const value = event.target.files[0];
            setInputs(values => ({...values, [name]: value}))
        }
    }
    return(
        <>
            <div className="form-container">
                <form method="post" encType="multipart/form-data">
                    <label>
                        <input type="file" name="files" onChange={handleChange}/>
                    </label>
                {/* <Link to="/declaration"> */}
                    <button type="button" className="btn-first-type" onClick={() => handler("+")}>
                            <span>Suivant</span>
                    </button>
                {/* </Link> */}
                </form>
            </div>
        </>
    )
}
export default FileDrop;