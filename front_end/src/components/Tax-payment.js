import FileDrop from "./payment-file-drop";
import Declaration from "./Declaration.js";
import Payment from "./final-payment";
import Navbar from "./Navbar";
import axios from "axios";
import Process from "./Return-process-level";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TaxPayment() {
    const navigate = useNavigate();
    const [pageNum, setPage] = useState(0);
    const [inputs, setInputs] = useState({});
    const [id, setId] = useState(0);
    useEffect(()=> {
            const infos = JSON.parse(window.localStorage.getItem('infos'));
        if (infos) {
            setId(infos.id)
            axios.post(`http://moncomptable.localhost:80/api/user/check.php`, infos).then((response) => {
                if(!response.data.status) {
                    navigate("/");
                }
            })
        }
        else{
            navigate("/");
        }
    },[])

    const pages = {
        0: <FileDrop handler={() => pageHandler}  setter={() => setInputs}></FileDrop>,
        1: <Declaration handler={() => pageHandler}  setter={() => setInputs}></Declaration>,
        2: <Payment handler={() => pageHandler}  setter={() => setInputs} submiter={() => handleSubmit}></Payment>
    }
    const pageHandler = (sign) => {
        if (sign === "+") {
            setPage(pageNum => pageNum + 1)
        }
        else if(sign === "-") {
            if(pageNum > 0) {
                setPage(pageNum => pageNum - 1)
            }
            else{
                navigate("/dashboard");
            }
        }
        else{
            navigate("/dashboard");
        }
    };
    const handleSubmit = () => {
        console.log(inputs)
        axios.post(`http://moncomptable.localhost:80/api/user/impots.php/${id}`, inputs).then((response) => {
            console.log(response.data);
        })
        pageHandler("");
    }
    return(
        <>
            <Navbar />
            <Process handler={() => pageHandler} ></Process>
            {pages[pageNum]}
        </>
    )
}

export default TaxPayment;