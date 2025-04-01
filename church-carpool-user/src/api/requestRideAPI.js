export const requestRide = async (data) => {
  const response = await fetch(
    "http://localhost:8080/api/v1/ride/ride-request/command/create-ride-request",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
};
