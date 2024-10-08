import React, { useContext, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import myContext from '../../../context/data/myContext';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function DashboardTab() {
    const context = useContext(myContext)
    const { product, edithandle, deleteProduct, order, user } = context
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div >
            <div className="container mx-auto">
                <div className="tab container mx-auto ">
                    <Tabs defaultIndex={0} className=" " >
                        <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
                            <Tab>
                                <button type="button" className="font-medium border-b-2 hover:shadow-lime-700 border-lime-500 text-lime-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] ">
                                    <div className="flex gap-2 items-center">
                                        <MdOutlineProductionQuantityLimits />Products</div> </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] ">
                                    <div className="flex gap-2 items-center">
                                        <AiFillShopping /> Order
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="font-medium border-b-2 hover:shadow-fuchsia-700 border-fuchsia-500 text-fuchsia-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] ">
                                    <div className="flex gap-2 items-center">
                                        <FaUser /> Users
                                    </div>
                                </button>
                            </Tab>
                        </TabList>

                        {/* product  */}
                        <TabPanel>
                            <div className='  px-4 md:px-0 mb-16'>
                                <h1 className=' text-center mb-5 text-3xl font-semibold underline text-white'>Product Details</h1>
                                <div className=" flex justify-end px-5">
                                    <Link to={'/addproduct'}>
                                        <button
                                            type="button"
                                            className="border border-lime-200 bg-lime-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] hover:bg-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                                            <div className="flex gap-2 items-center">
                                                Add Product <FaCartPlus size={20} />
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                                <div className="relative overflow-x-auto ">
                                    <table className="w-full text-sm text-left text-white">
                                        <thead className="text-lg border border-lime-200 uppercase bg-lime-900 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" >
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Sr.No
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Image
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Title
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Price
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Category
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        {product?.map((item, index) => {
                                            console.log(product)
                                            const { title, price, imageUrl, category, date } = item;
                                            return (
                                                <tbody className='text-white'>
                                                    <tr className="bg-gray-800 border-b border-lime-200 ">
                                                        <td className="px-6 py-4">
                                                            {index + 1}.
                                                        </td>
                                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                            <img className='w-16' src={imageUrl} alt="img" />
                                                        </th>
                                                        <td className="px-6 py-4 ">
                                                            {title}
                                                        </td>
                                                        <td className="px-6 py-4 ">
                                                            ₹ {price}
                                                        </td>
                                                        <td className="px-6 py-4 ">
                                                            {category}
                                                        </td>
                                                        <td className="px-6 py-4 ">
                                                            {date}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className=" flex gap-2">
                                                                <div className=" flex gap-2 cursor-pointer "  >
                                                                    <div onClick={() => deleteProduct(item)}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a3e635" className="w-6 h-6">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                        </svg>
                                                                    </div>
                                                                    <Link to={'/updateproduct'}>
                                                                        <div onClick={() => edithandle(item)} >
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a3e635" className="w-6 h-6">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                            </svg>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                    </table>
                                </div>
                            </div>
                        </TabPanel>

                        {/* Order */}
                        <TabPanel>
                            <div className="relative overflow-x-auto mb-16">
                                <h1 className=' text-center mb-5 text-3xl font-semibold underline text-white'  >Order Details</h1>
                                {order?.map((allorder, index) => {
                                    return (
                                        <table className="w-full text-sm text-white" >
                                            <thead className="text-xs border border-purple-200 uppercase bg-purple-900 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        Payment Id
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Image
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Title
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Price
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Category
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Name
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Address
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Pincode
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Phone Number
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Email
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Date
                                                    </th>
                                                </tr>
                                            </thead>

                                            {allorder?.cartItems.map((item, index) => {
                                                console.log(allorder);
                                                const { title, description, category, imageUrl, price } = item;
                                                return (
                                                    <tbody>
                                                        <tr className="bg-gray-800 border-b border-purple-200 text-white">
                                                            <td className="px-6 py-4 "  >
                                                                {allorder.paymentId}
                                                            </td>
                                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                                <img className='w-16' src={imageUrl} alt="img" />
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {title}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                ₹{price}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {category}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {allorder.addressInfo.name}
                                                            </td>
                                                            <td className="px-6 py-4"  >
                                                                {allorder.addressInfo.address}
                                                            </td>
                                                            <td className="px-6 py-4"  >
                                                                {allorder.addressInfo.pincode}
                                                            </td>
                                                            <td className="px-6 py-4"  >
                                                                {allorder.addressInfo.phoneNumber}
                                                            </td>
                                                            <td className="px-6 py-4"  >
                                                                {allorder.email}
                                                            </td>
                                                            <td className="px-6 py-4"  >
                                                                {allorder.date}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })}
                                        </table>
                                    )
                                })}
                            </div>
                        </TabPanel>

                        {/* User */}
                        <TabPanel>
                            <div className="relative overflow-x-auto mb-16">
                                <h1 className=' text-center mb-5 text-3xl font-semibold underline text-white'>User Details</h1>
                                <table className="w-full text-sm text-white">
                                    <thead className="text-lg border border-fuchsia-200 uppercase bg-fuchsia-900 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Sr.No
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                UID
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>

                                    {user.map((item, index) => {
                                        const { name, uid, email, date } = item;
                                        return (
                                            <tbody>
                                                <tr className="bg-gray-800 border-b border-fuchsia-200 text-white" >
                                                    <td className="px-20 py-4 "  >
                                                        {index + 1}.
                                                    </td>
                                                    <td className="px-20 py-4 "  >
                                                        {name}
                                                    </td>
                                                    <td className="px-20 py-4 "  >
                                                        {email}
                                                    </td>
                                                    <td className="px-20 py-4 "  >
                                                        {uid}
                                                    </td>
                                                    <td className="px-21 py-4 " >
                                                        {date}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })}
                                </table>
                            </div>
                        </TabPanel>

                    </Tabs>
                </div>
            </div>
        </div>
    )
}




export default DashboardTab