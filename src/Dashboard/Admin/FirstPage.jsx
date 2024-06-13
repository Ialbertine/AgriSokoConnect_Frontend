import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { VscLoading } from "react-icons/vsc";

const FirstPage = () => {

    const [buyers, setBuyers] = useState([]);
    const [farmers, setFarmers] = useState([]);
    const [stock, setStock] = useState([]);
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //   Fetcing total farmers 

    useEffect(() => {
        const fetchTotalFarmers = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError('No token found, please log in');
                    setLoading(false);
                    return;
                }

                const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalFarmer', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    //   throw new Error(`Unexpected response format: ${contentType}`);
                }

                const data = await response.json();
                console.log('Fetched data:', data); // Debug log

                if (data && typeof data.farmers === 'number') {
                    setFarmers(data.farmers);
                } else {
                    //   console.error('Unexpected data structure:', data); // Debug log
                    //   throw new Error('Response data does not contain expected farmers array');
                }
            } catch (error) {
                console.error('Error fetching farmers:', error); // Debug log
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };


        const fetchTotalBuyers = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError('No token found, please log in');
                    setLoading(false);
                    return;
                }

                const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalBuyer', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    // throw new Error(`Unexpected response format: ${contentType}`);
                }

                const data = await response.json();
                console.log('Fetched data (buyers):', data);

                if (data && typeof data.buyers === 'number') {
                    setBuyers(data.buyers);
                } else {
                    // console.error('Unexpected data structure:', data);
                    // throw new Error('Response data does not contain expected buyers count');
                }
            } catch (error) {
                console.error('Error fetching buyers:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchTotalStock = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError('No token found, please log in');
                    setLoading(false);
                    return;
                }

                const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalStock', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    // throw new Error(`Unexpected response format: ${contentType}`);
                }

                const data = await response.json();
                console.log('Fetched data (stock):', data);

                if (data && typeof data.stocks === 'number') {
                    setStock(data.stocks);
                } else {
                    // console.error('Unexpected data structure:', data);
                    // throw new Error('Response data does not contain expected buyers count');
                }
            } catch (error) {
                console.error('Error fetching buyers:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchTotalOrders = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError('No token found, please log in');
                    setLoading(false);
                    return;
                }

                const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalOrder', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    // throw new Error(`Unexpected response format: ${contentType}`);
                }

                const data = await response.json();
                console.log('Fetched data (orders):', data);

                if (data && typeof data.orders === 'number') {
                    setOrders(data.orders);
                } else {
                    // console.error('Unexpected data structure:', data);
                    // throw new Error('Response data does not contain expected buyers count');
                }
            } catch (error) {
                console.error('Error fetching buyers:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchTotalUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError('No token found, please log in');
                    setLoading(false);
                    return;
                }

                const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalUsers', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    throw new Error(`Unexpected response format: ${contentType}`);
                }

                const data = await response.json();
                console.log('Fetched data (users):', data);

                if (data && typeof data.users === 'number') {
                    setUsers(data.users);
                } else {
                    // console.error('Unexpected data structure:', data);
                    // throw new Error('Response data does not contain expected buyers count');
                }
            } catch (error) {
                console.error('Error fetching buyers:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        // for BARCHART 
        fetchTotalFarmers();
        fetchTotalBuyers();

        // for PIE CHART 
        fetchTotalStock();
        fetchTotalOrders();
        fetchTotalUsers();
    }, []);


    if (loading) {
        return (
            <>
                <div className='relative'>
                    <img src='../harvest5.jpg' className='h-[30vh] w-full object-cover'></img>
                    <div className='absolute lg:top-16 md:top-24 sm:top-24 lg:left-[72vh] md:left-[42vh] sm:left-[8vh] text-white'>
                        <p className='text-5xl'><b>Admin Dashboard</b></p>
                    </div>
                </div>
                <div className='pt-20 flex justify-center gap-5 text-xl h-[80vh] text-black font-semibold'>
                    <VscLoading className='animate-spin' />
                    <p>Loading</p>
                </div>
            </>
        )
    };

    if (error) {
        // return <div>Error: {error}</div>
    };

    // BARCHART data 

    const data = [
        {
            name: 'Users',
            farmerCount: farmers,
            buyerCount: buyers,
            amt: farmers+buyers
        },
    ];

    // PIECHART data 

    const PieData = [
        { name: 'Users', value: users },
        { name: 'Stocks', value: stock },
        { name: 'Orders', value: orders },
    ]
    const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

    // Received orders 

    
    return (
        <>
            <div className=''>
                <div className='relative'>
                    <img src='../harvest5.jpg' className='h-[30vh] w-full object-cover'></img>
                    <div className='absolute lg:top-16 md:top-24 sm:top-24 lg:left-[72vh] md:left-[42vh] sm:left-[8vh] text-white'>
                        <p className='text-5xl'><b>Admin Dashboard</b></p>
                    </div>
                </div>
                <div className='flex gap-10 pt-10 px-5'>
                    <div className='px-5 py-5 rounded-sm bg-[#f2f2f2] h-[53vh]'>
                        <div>
                            <strong className=''>General Statistics</strong>
                        </div>
                        <div className=''>
                            <div className='w-full mt-3 flex flex-col'>
                                <BarChart width={600} height={300} data={data}>
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis dataKey="users" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="farmerCount" fill="#269553" name="Farmers" />
                                    <Bar dataKey="buyerCount" fill="#B3C860" name="Buyers" />
                                </BarChart>
                            </div>
                        </div>
                    </div>
                    <div className='w-[79vh] bg-[#f2f2f2] flex'>
                    <strong className= 'pt-4 pl-5'>Web statistics</strong>

                        <div className=' h-[53vh] pt-20'>
                            <PieChart width={300} height={300}>
                                <Pie
                                    dataKey="value"
                                    data={PieData}
                                    cx="50%"
                                    cy="50%"
                                    fill="#8884d8"
                                    label
                                >
                                    {PieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </div>
                        
                    </div>
                </div>

                
                
                
            </div >
        </>
    )
}

export default FirstPage