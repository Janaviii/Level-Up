import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'

function ProductCard() {
    const context = useContext(myContext)
    const { mode, product, searchkey, filterType } = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    console.log(cartItems);

    //Add to cart
    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success("Add to cart")
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <section className="text-white body-font">
            <div className="container px-5 mb-8 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2  text-white" >Our Latest Collection</h1>
                    <div class="h-1 w-20 bg-amber-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {product?.filter((obj) => obj.title.toLowerCase().includes(searchkey)).
                        filter((obj) => obj.category.toLowerCase().includes(filterType)).map((item, index) => {
                            const { title, price, imageUrl, id } = item;
                            return (
                                <div onClick={() => window.location.href = `/productinfo/${id}`}
                                    key={index} className="p-4 md:w-1/4  drop-shadow-lg " >
                                    <div className="h-full bg-gray-800 border-2 hover:shadow-amber-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-amber-200 border-opacity-60 rounded-2xl overflow-hidden"  >
                                        <div className="flex justify-center cursor-pointer">
                                            <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={imageUrl} alt="blog" />
                                        </div>
                                        <div className="p-5 border-t-2">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1" >Level Up</h2>
                                            <h1 className="title-font text-lg font-medium  text-white mb-3" >{title}</h1>
                                            <p className="leading-relaxed mb-3" >₹ {price}</p>
                                            <div className=" flex justify-center">
                                                <button type="button"
                                                    onClick={() => addCart(item)}
                                                    className="focus:outline-none text-white bg-amber-600 hover:bg-amber-400 rounded-lg text-sm w-full  py-2">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </section >
    )
}

export default ProductCard