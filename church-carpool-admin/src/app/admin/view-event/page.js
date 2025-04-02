"use client";
import Box from "@/components/Box";
import Table from "@/components/Table";
import Center from "@/components/Center";
import { useEffect, useState } from "react";

// const columns = ["Name", "Age", "Role", "Name", "Age", "Role"];
// const data = [
//   ["John Doe", 28, "Developer","John Doe", 28, "Developer"],
//   ["Jane Smith", 32, "Designer", "John Doe", 28, "Developer"],
//   ["Mike Johnson", 25, "Manager","John Doe", 28, "Developer"],
// ];

export default function ViewEvent() {
  const columns = ["Event Name", "Start Date", "Drivers"];
  const [data, setData] = useState([]);

  useEffect(() =>{
    fetch('https://fffa-193-149-173-107.ngrok-free.app/api/v1/church-carpool/event/query/get-events' , {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(rows => {
      const newData = rows.map((row)=>[
        row.eventName, row.startDate, row.noOfDrivers
      ]);
      setData(newData);
    })
    .catch(error => console.error('Error:', error));
  }, []);


  return (
    <Box>
      <Center>
      <div>
        <h2>Events Created</h2>
        <Table columns={columns} data={data}/>
      </div>
      </Center>
    </Box>
  );
}
