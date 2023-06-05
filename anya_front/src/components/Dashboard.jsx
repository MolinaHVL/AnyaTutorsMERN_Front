import { useState, useEffect, useRef, useMemo } from 'react';
import { Box, Card, CardContent, Typography, Switch, TextField } from '@mui/material';
import { io } from 'socket.io-client';
import Chart from 'chart.js/auto';

const Dashboard = () => {
    const [temperature, setTemperature] = useState(20);
    const [humidity, setHumidity] = useState(50);
    const [outdoorLights, setOutdoorLights] = useState(false);
    const [indoorLights, setIndoorLights] = useState(false);
    const [temperatureHistory, setTemperatureHistory] = useState([20, 21, 22, 21, 20, 19, 18, 19, 20]);
    const [heater, setHeater] = useState(false);
    const [cooler, setCooler] = useState(false);
    const [isAutomatic, setIsAutomatic] = useState(true);

    const socket = useMemo(() => io(process.env.REACT_APP_API_URL), []);

    const handleOutdoorLights = () => setOutdoorLights(!outdoorLights);
    const handleIndoorLights = () => {

        setIndoorLights(!indoorLights)
        socket.emit("indoorLights", !indoorLights)
    };
    const handleHeater = () => setHeater(!heater);
    const handleCooler = () => setCooler(!cooler);
    const toggleMode = () => setIsAutomatic(!isAutomatic);

    const chartRef = useRef();
    const chartInstanceRef = useRef();

    useEffect(() => {
        if (chartRef.current) {
            chartInstanceRef.current = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: new Array(temperatureHistory.length).fill(''),
                    datasets: [
                        {
                            data: temperatureHistory,
                            fill: false,
                            backgroundColor: 'rgb(75,192,192)',
                            borderColor: 'rgba(75,192,192,0.2)',
                        },
                    ],
                },
            });

            return () => {
                chartInstanceRef.current.destroy();
            };
        }
    }, []);

    useEffect(() => {
        if (chartInstanceRef.current) {
            const chartInstance = chartInstanceRef.current;

            // Update chart
            chartInstance.data.labels = new Array(temperatureHistory.length).fill('');
            chartInstance.data.datasets[0].data = temperatureHistory;
            chartInstance.update();
        }
    }, [temperatureHistory]);

    useEffect(() => {
        const temperatureListener = (data) => {
            setTemperature(data);
            setTemperatureHistory(prevHistory => [...prevHistory, data]);
        };

        socket.on("temperature", temperatureListener);

        return () => {
            socket.off("temperature", temperatureListener);
        };
    }, [socket]);

    return (
        <Box display="flex" justifyContent="center" m={2}>
            <Card style={{ width: '500px', padding: '20px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}>
                <CardContent>
                    <Typography variant="h4" align="center" gutterBottom>Dashboard</Typography>

                    <Typography variant="h6">Temperature: {temperature}°C</Typography>
                    <Typography variant="h6">Humidity: {humidity}%</Typography>

                    <Typography variant="h6" style={{ marginTop: '20px' }}>Outdoor lights status: {outdoorLights ? "On" : "Off"}</Typography>
                    <Switch checked={outdoorLights} onChange={handleOutdoorLights} />

                    <Typography variant="h6" style={{ marginTop: '20px' }}>Indoor lights status: {indoorLights ? "On" : "Off"}</Typography>
                    <Switch checked={indoorLights} onChange={handleIndoorLights} />

                    <Typography variant="h6" style={{ marginTop: '20px' }}>Thermostat mode: {isAutomatic ? "Automatic" : "Manual"}</Typography>
                    <Switch checked={isAutomatic} onChange={toggleMode} />

                    {!isAutomatic ? (
                        <>
                            <Typography variant="h6" style={{ marginTop: '20px' }}>Heater status: {heater ? "On" : "Off"}</Typography>
                            <Switch checked={heater} onChange={handleHeater} />

                            <Typography variant="h6" style={{ marginTop: '20px' }}>Cooler status: {cooler ? "On" : "Off"}</Typography>
                            <Switch checked={cooler} onChange={handleCooler} />
                        </>
                    )
                        :
                        (
                            <>
                                <Typography variant="h6" style={{ marginTop: '20px' }}>Set thermostat:</Typography>
                                <TextField type="number" value={temperature} onChange={(e) => {
                                    setTemperature(e.target.value)
                                    socket.emit('temperature', e.target.value)
                                }} disabled={!isAutomatic} />
                            </>
                        )
                    }

                    <Typography variant="h6" style={{ marginTop: '20px' }}>Temperature History:</Typography>
                    <canvas ref={chartRef} />
                </CardContent>
            </Card>
        </Box>
    );
};

export default Dashboard;