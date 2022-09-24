import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/history-icon-web-browsing-symbol-260nw-1335655310.jpg";
import axios from "axios";
import Navbar from "./Navbar"
import "./Dashboard.css";


function Dashboard() {
    const navigate = useNavigate();
    
    useEffect(()=> {
        const infos = JSON.parse(window.localStorage.getItem('infos'));
        if (infos) {
            axios.post(`http://moncomptable.localhost:80/api/user/check.php`, infos).then((response) => {
                if(response.data.status) {
                    getHistory();
                }
                else{
                    navigate("/");
                }
            })
        }
        else{
            navigate("/");
        }
    },[])

    const [historyList, setHistory] = useState([]);
    const [message, setMessage] = useState("");
    const [searchInput, setInput] = useState("");


    const getHistory = () => {
        const infos = JSON.parse(window.localStorage.getItem('infos'));
        if (infos) {
            axios.post(`http://moncomptable.localhost:80/api/user/history.php`, {"id":infos.id}).then((response) => {
                if (response.data["status"]){
                    setHistory(response.data["history"])
                }
                else{
                    setMessage(response.data.message)
                }
            })
        }
    }
    useEffect(() => {
        getHistory();
    },[])

    const showHistory = (array) => {
        if (array.length>=1) {
            return array.map((line) => (
            <div className="historic-bar" key={line["id"]}>
                <div className="historic-text">
                    <span>Paiement de {line["nature"]} pour {line["period"]} {line["year"]}</span>
                </div>
                <div className="historic-date">
                    <span>le {line[4]}</span>
                </div>
            </div>)
            )
    
        }
        else{
            return (
                <div className="empty-historic-container">
                    <div className="wrapper">
                        <div className="empty-image-container">
                            <img src={icon} alt="." />
                        </div>
                        <div>
                            <span>Votre historique est vide</span>
                        </div>
                    </div>
                </div>
                )
        }
    }
    const search = (input,array) => {
        input = input.toLowerCase()
        return array.filter((line) => (line["nature"].toLowerCase()).includes(input) || (line["period"].toLowerCase()).includes(input) || (line["period"].toLowerCase()).includes(input) || ("paiement de pour").includes(input))
    }

    return(
        <>
            <Navbar />
            <div className="user-board-container">
                <div className="enterprise-name">
                    <span>Mokpokpo SARL</span>
                </div>
                <hr />
                <div className="user-board-bar">
                    <div className="title">
                        <span>Historique</span>
                    </div>
                    <div className="Search-filter-bar">
                        <label>
                            <input type="text" placeholder="Rechercher" name="search" onChange={(event) => {setInput(event.target.value)}}/>
                        </label>
                        <label>
                            <select>
                                <optgroup>
                                    <option>Trier par date</option>
                                    <option>Aujourd'hui</option>
                                    <option>Hier</option>
                                    <option>les 7 derniers jours</option>
                                </optgroup>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="historic-container">
                    {showHistory(search(searchInput,historyList))}
                </div>
            </div>
        </>
    )
}

export default Dashboard;