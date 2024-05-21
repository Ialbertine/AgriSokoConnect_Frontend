import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Tooltip, XAxis } from 'recharts'
import { CountBuyers, CountFarmers } from './Apis';

const FirstPage = () => {

    const [farmers, setFarmers] = useState([]);
    const [buyers, setBuyers] = useState([]);

    useEffect(() =>{
        CountFarmers()
        .then((response) =>{
            console.log(response);
            setFarmers(response);
        })
        .catch((error) =>{
            console.log(error);
        })
    })

    useEffect(() =>{
        CountBuyers()
        .then((response) =>{
            console.log(response);
            setBuyers(response);
        })
        .catch((error) =>{
            console.log(error);
        })
    })

    const data = [
        {
            name: 'Jan',
            Farmers: 20,
            Buyers: 40,
        },
        {
            name: 'Feb',
            Farmers: 70,
            Buyers: 80,
        },
        {
            name: 'Mar',
            Farmers: 30,
            Buyers: 50,
        },
        {
            name: 'Apr',
            Farmers: 90,
            Buyers: 160,
        },
        {
            name: 'May',
            Farmers: 100,
            Buyers: 80,
        },
        {
            name: 'Jun',
            Farmers: 170,
            Buyers: 90,
        },
        {
            name: 'July',
            Farmers: 120,
            Buyers: 180,
        },
        {
            name: 'Aug',
            Farmers: 130,
            Buyers: 150,
        },
        {
            name: 'Sep',
            Farmers: 130,
            Buyers: 190,
        },
        {
            name: 'Oct',
            Farmers: 130,
            Buyers: 200,
        },
        {
            name: 'Nov',
            Farmers: 130,
            Buyers: 140,
        },
        {
            name: 'Dec',
            Farmers: 190,
            Buyers: 100,
        },
    ]

    const stats = [
        {
            name: 'Transactions',
            value: 70,
        },
        {
            name: 'uploads',
            value: 50,
        },
        {
            name: 'Accounts',
            value: 40,
        }
    ]

    const RADIAN = Math.PI / 100
    const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
        const x = cx + radius * Math.cos(-midAngle * RADIAN)
        const y = cy + radius * Math.sin(-midAngle * RADIAN)

        return (
            <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        )
    }

    const RecentOrderData = [
        {
            id: '1',
            product_id: '3661',
            customer_id: '941',
            customer_name: 'Nancy H.',
            order_date: '12-5-2024 11:58 AM',
            order_total: 'RWF 2,224',
            order_status: 'PLACED',
            shippment_address: 'Nyarugenge KN 674 ST'

        },
        {
            id: '2',
            product_id: '974',
            customer_id: '937',
            customer_name: 'Albertine I.',
            order_date: '5-13-2024 1:05 PM',
            order_total: 'RWF 1,654',
            order_status: 'CONFIRMED',
            shippment_address: 'Nyarugenge KN 974 ST'

        },
        {
            id: '3',
            product_id: '61',
            customer_id: '91',
            customer_name: 'Magnifique I.',
            order_date: '4-22-2023 7:46 AM',
            order_total: 'RWF 2,004',
            order_status: 'SHIPPED',
            shippment_address: 'Gasabo KG 674 AV'

        },
        {
            id: '4',
            product_id: '974',
            customer_id: '41',
            customer_name: 'Ruth.',
            order_date: '1-30-2024 19:28 PM',
            order_total: 'RWF 90,147',
            order_status: 'SHIPPED',
            shippment_address: 'Kicukiro KK 9 ST'

        },
        {
            id: '5',
            product_id: '908',
            customer_id: '9',
            customer_name: 'Bega G.',
            order_date: '2-2-2024 12:58  PM',
            order_total: 'RWF 62,224',
            order_status: 'PLACED',
            shippment_address: 'Gasabo KG 74 ST'

        },
    ]

    const PopularProduct = [
        {
            id:'10',
            product_name:'Rice',
            product_price:'RWF 193,489/1t'
        },
        {
            id:'11',
            product_name:'Maize',
            product_price:'RWF 321,489 /1t'
        },
        {
            id:'12',
            product_name:'beans',
            product_price:'RWF 128`,489 /1t'
        },
    ]

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
                    <div className='px-5 py-5 rounded-sm bg-[#f2f2f2] h-[64vh]'>
                        <div>
                            <strong className=''>General Statistics</strong>
                        </div>
                        <div className='h-[20rem] '>
                            <div className='w-full mt-3 flex'>
                                <BarChart className='' height={300} margin={{ top: 20, right: 10, left: 10, bottom: 0 }} data={data} width={700}>
                                    <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                                    <XAxis dataKey={name} />
                                    <XAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey='Farmers' fill='#269553' />
                                    <Bar dataKey='Buyers' fill='#B3C860' />
                                </BarChart>
                            </div>
                        </div>
                    </div>
                    <div className='w-[59h]'>
                        <div className='bg-[#f2f2f2]'>
                            <PieChart width={400} height={300}>
                                <Pie data={stats} cx='50%' cy='45%' labelLine={false} label={renderCustomizedLabel} outerRadius={105} fill='#B3C860' dataKey='value'>
                                    {data.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </div>
                        <div className='bg-[#f2f2f2] mt-2 h-[21vh] p-4'>
                            <strong className=''>Transactions</strong>
                            <div className='flex mt-2 text-[#B3C860] text-center'>
                                <div className='bg-[#269553] rounded-lg w-[20vh] h-[12vh] p-2'>
                                    <strong className='text-4xl'>93%</strong>
                                    <p>Successful</p>
                                </div>
                                <div className='bg-[#269553] rounded-lg ml-3 w-[14vh] h-[12vh] p-2'>
                                    <strong className='text-4xl'>4%</strong>
                                    <p>Canceled</p>
                                </div>
                                <div className='bg-[#269553] rounded-lg ml-3 w-[14vh] h-[12vh] p-2'>
                                    <strong className='text-4xl'>1%</strong> 
                                    <p>Failed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-10 mt-10 px-5'>
                    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 p-5'>
                        <strong>Reccent order</strong>
                        <div className='mt-3'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-slate-100'>
                                        <td className='p-2'>ID</td>
                                        <td>Product Id</td>
                                        <td>Customer name</td>
                                        <td>Order date</td>
                                        <td>Order total</td>
                                        <td>Shipping address</td>
                                        <td>Order status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {RecentOrderData.map((order) =>
                                        <tr key={order.id}>
                                            <td className='p-2 pr-5'>
                                                <Link to={`/order/${order.id}`} className=' text-cyan-600 hover:text-blue-800 hover:underline hover:underline-offset-2'>#{order.id}</Link>
                                            </td>
                                            <td>
                                                <Link to={`/product/${order.product_id}`} className='text-cyan-600 hover:text-blue-800 hover:underline hover:underline-offset-2'>{order.product_id}</Link>
                                            </td>
                                            <td>
                                                <Link to={`/customer/${order.customer_name}`} className='text-cyan-600 hover:text-blue-800 hover:underline hover:underline-offset-2'>{order.customer_name}</Link>
                                            </td>
                                            <td>{order.order_date}</td>
                                            <td>{order.order_total}</td>
                                            <td>{order.shippment_address}</td>
                                            <td>{order.order_status}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </div>

                    </div>
                    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]'>
                        <div>
                            <strong>Popular products</strong>
                        </div>
                        <div>
                            <div>
                                
                                <div className='flex  flex-wrap gap-3 pt-5 p-3'>
                                    {PopularProduct.map((order) =>
                                        <p key={order.id}>
                                            <p>{`Product id: ${order.id}`}</p>
                                            <p>  
                                            <p>{`Product name: ${ order.product_name}`}</p>
                                            </p>
                                            <p>{`Product price: ${order.product_price}`}</p>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FirstPage