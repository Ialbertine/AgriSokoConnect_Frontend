import React from 'react'
import { Link } from 'react-router-dom'
import { VscLoading } from "react-icons/vsc";

const Operation = () => {

  const RecentOrderData = [
    {
      id: '1',
      product_id: '3661',
      customer_id: '941',
      customer_name: 'Nancy H.',
      order_date: '12-5-2024 11:58 AM',
      order_total: 'RWF 2,224',
      order_status: 'PLACED',
      shippment_address: 'Nyanza KK 674 ST'

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
      shippment_address: 'Kimironko KG 674 AV'

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
      shippment_address: 'Kimihurura KG 74 ST'

    },
  ]

  const handleDeleteOrder = () => {

  }

  const DeletedOrders =[
    {
      id: '6',
      product_id: '99',
      customer_id: '20',
      customer_name: 'Nicerata A.',
      order_date: '2-2-2024 12:58  PM',
      order_total: 'RWF 762,224',
      order_status: 'PLACED',
      shippment_address: 'Kanombe KK 174 ST'
    },
    {
      id: '7',
      product_id: '499',
      customer_id: '10',
      customer_name: 'Perfect G.',
      order_date: '2-2-2024 1:08  PM',
      order_total: 'RWF 1,762,224',
      order_status: 'CONFIRMED',
      shippment_address: 'Kacyiru KG 174 ST'
    }
  ]

  const PendingOrders =[
    {
      id: '7',
      product_id: '921',
      customer_id: '84',
      customer_name: 'Benigne A.',
      order_date: '5-12-2024 12:58  PM',
      order_total: '',
      order_status: 'PENDING...',
      shippment_address: ''
    },
    {
      id: '8',
      product_id: '4029',
      customer_id: '144',
      customer_name: 'Hugette Ganza.',
      order_date: '4-22-2024 1:08  PM',
      order_total: 'RWF 762,224',
      order_status: 'PENDING...',
      shippment_address: ''
    }
  ]

  const handleRestoreOrder = () =>{

  }

  return (
    <div className='p-10 flex flex-col gap-5 bg-[#f2f2f2]'>
      <strong className='text-xl'>MANAGE ORDERS</strong>
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
                <td>EDIT</td>
              </tr>
            </thead>
            <tbody>
              {RecentOrderData.map((order) =>
                <tr key={order.id}>
                  <td className='p-2 pr-5'>
                    <Link to='/dashboard/operations/orderDetails' className=' text-cyan-600 hover:text-blue-800 hover:underline hover:underline-offset-2'>#{order.id}</Link>
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
                  <td><button onClick={handleDeleteOrder} className='text-white rounded-lg px-3 bg-[#db5050] hover:bg-[#ad3e3e] p-1'>Delete order</button></td>
                </tr>
              )}
            </tbody>
          </table>

        </div>

      </div>
      
      <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 p-5'>
        <strong> Deleted</strong>
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
              <td>EDIT</td>
            </tr>
          </thead>
          <tbody>
            {DeletedOrders.map((order) =>
              <tr key={order.id}>
                <td className='p-2 pr-5'>
                  <Link to='/dashboard/operations/orderDetails' className=' text-cyan-600 hover:text-blue-800 hover:underline hover:underline-offset-2'>#{order.id}</Link>
                </td>
                <td>
                  <Link to='/dashboard/operations/orderDetails' className='text-cyan-600 hover:text-blue-800 hover:underline hover:underline-offset-2'>{order.product_id}</Link>
                </td>
                <td>
                  <Link to={`/customer/${order.customer_name}`} className='text-cyan-600 hover:text-blue-800 hover:underline hover:underline-offset-2'>{order.customer_name}</Link>
                </td>
                <td>{order.order_date}</td>
                <td>{order.order_total}</td>
                <td>{order.shippment_address}</td>
                <td>{order.order_status}</td>
                <td><button onClick={handleRestoreOrder} className='text-white rounded-lg px-3 bg-[#269553] hover:bg-[#2d7a4a] p-1'>Restore order</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 p-5'>
        <strong> Pending orders</strong>
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
            {PendingOrders.map((order) =>
              <tr key={order.id}>
                <td className='p-2 pr-5'>
                  <Link to='/dashboard/operations/orderDetails' className=' text-cyan-600 hover:text-blue-800 hover:underline hover:underline-offset-2'>#{order.id}</Link>
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
                <td className='flex items-center gap-3'>{order.order_status} <VscLoading className='animate-spin'/></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Operation