import React, {useRef, useState, useEffect} from "react";

function  FinalPage() {
    const addr = "ws://localhost:5000";
    const [outputs, setOutputs] = useState([]);
    const [img, setImg] = useState([0, 1, 2]);
    const [socketConnected, setSocketConnected] = useState(false);

    let ws = useRef(null);

    const connectServer = () => {
        if(!ws.current){
            ws.current = new WebSocket(addr);
            ws.current.onopen = () => {
                console.log("connected to " + addr);
                setOutputs("connected to " + addr);
                setSocketConnected(true);
                ws.current.send(
                    JSON.stringify({
                        message: 0
                    })
                )
            };
            ws.current.onclose = (error) => {
                console.log("disconnect from " + addr);
                setOutputs("disconnect from " + addr)
                console.log(error);
            };
            ws.current.onerror = (error) => {
                console.log("connection error " + addr);
                setOutputs("connection error " + addr)
                console.log(error);
            };
            ws.current.onmessage = (evt) => {
                // server에서 보낸 데이터
                const data = JSON.parse(evt.data);
                console.log(data);
                setImg[0] = data[0];

                setOutputs((prevItems) => data);
            };
        };
    };
    useEffect(() => {
        connectServer();
    });

    return (
        <div>
            <img src={process.env.PUBLIC_URL + "simdir" + setImg[0]}
                style={{width : '90%',
                    height : '350px',
                    border: '2px solid black' ,
                    top: '0px',
                    left: '0px'
                }}/>

        </div>
        );
}


export default FinalPage;
