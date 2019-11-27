import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";

function NewsFlightsRender({ airports, flightHomeCity, flightTime, flightDate }) {
    console.log("NewsFlightsRender");
    console.log("NewsFlightsRender flightHomeCity", flightHomeCity);
    console.log("NewsFlightsRender flightTime", flightTime);
    console.log("NewsFlightsRender flightDate", flightDate);
    console.log("NewsFlightsRender airports", airports);
    const [numberOfTickets, SetNumberOfTickets] = useState(1);
    const [flights, setFlights] = useState([]);
    const [flightDestination, setFlightDestination] = useState("LHR");
    // const arrival = "2019-12-02T15:35:00";
    const latestFlightArrival = reverseDateOrder(flightDate) + "T" + removeHours(flightTime, 5) + ":00";
    console.log("NewsFlightsRender latestFlightArrival", latestFlightArrival);

    useEffect(() => {
        console.log("NewsFlightsRender useEffect");
        console.log("flightDate", flightDate);
        console.log("flightDestination", flightDestination);
        console.log("numberOfTickets", numberOfTickets);
        let urlFlight = "https://www.leafmight.dk/security/api/info/flightdata2/" + reverseDateOrder(flightDate) + "/economy/" + flightDestination + "-sky/" + numberOfTickets;
        console.log("NewsFlights - useEffect - flights-urlFlight", urlFlight);
        fetch(urlFlight).then(handleHttpErrors).then(data => {
            console.log("NewsFlights - useEffect - flights-data", data);
            setFlights(data); //.sort((a, b) => a.name.localeCompare(b.name)));
        }).catch(console.log.bind(console));

    }, [], flightDate, flightDestination, numberOfTickets);



    if (flights.length == 0) {
        return (
            <div>
                <p>Server pending</p>
            </div>
        )
    } else {
        const flightsBeforeTime = flights.filter((flight) => {
            return flight.arrival < latestFlightArrival
        })
        console.log("flightsBeforeTime", flightsBeforeTime);
        console.log("flights.code", flights.code);
        return (
            <div>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Dato</th>
                            <th>Lufthavn</th>
                            <th>Flyselskab</th>
                            <th>Pris</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map((flight) => (
                            <tr key={uuid()}>
                                <td>{flight.arrival}</td>
                                <td>{flight.endDestination}</td>
                                <td>{flight.agentsName}</td>
                                <td>kr. {flight.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
}

const reverseDateOrder = (dateString) => {
    const tempdate = dateString.split("/");
    console.log("tempdate", tempdate);
    const newDate = tempdate[2] + "-" + tempdate[1] + "-" + tempdate[0];
    console.log("newDate", newDate)
    return newDate;
};

const removeHours = (timeString, hours) => {
    const tempTime = timeString.split(":");
    console.log("tempTime", tempTime);
    const newHours = Number(tempTime[0]) - hours;
    console.log("newHours", newHours);
    const newTime = newHours + ":" + tempTime[1];
    console.log("newTime", newTime)
    return newTime;
};

export default NewsFlightsRender;