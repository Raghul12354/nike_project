import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setAddItemCart } from "./app/CartSlice";
import Topsales from "./datas.js/topsalesData";

const TopSales = () => {
  // const mappedProducts = Topsales.map((item) => ({
  //   id: item.id,
  //   title: item.title,
  //   price: item.price,
  //   img: item.img,
  //   text: item.text,
  //   rating: item.rating,
  // }));

  // const resEvent2 = {
  //   eventName: "Added to the cart",
  //   data: mappedProducts,
  // };
  // const dispatch = useDispatch();
  // const onAddToCart = (id) => {
  //   const item = Topsales.find((item) => item.id === id);
  //   dispatch(setAddItemCart(item));


  //  // Check if window.ReWebSDK is defined
  //   if (typeof window !== "undefined" && window.ReWebSDK) {
  //     try {
  //       // Call the SDK customEvent method
  //       window.ReWebSDK.customEvent(resEvent2);
  //       console.log("Custom Event 'Added to the cart' tracked:", resEvent2);
  //     } catch (error) {
  //       console.error("Error tracking custom event with SDK:", error);
  //     }
  //   } else {
  //     // Log an error if SDK is not available
  //     console.error("ReWebSDK is not available on window.");
  //   }
  // };

  return (
    <div className="lg:mx-4 py-8 md:mx-4 xsm:bg-black">
      <h1 className="lg:text-5xl font-bold tracking-normal capitalize lg:mb-[11%] xl:mb-[8%] md:mb-[12%] lg:ml-4 md:ml-3 md:text-4xl sm:text-3xl sm:mb-20 sm:ml-10">
        Top rated sales
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-y-40 md:gap-y-40 lg:gap-y-52 place-items-center">
        {/* Items */}
        {Topsales.map((item) => {
          const { id, title, text, img, price, rating, btn, color, shadow } =
            item;
          return (
            <div
              key={id}
              className={`relative bg-gradient-to-b transition-all duration-700 ease-in-out hover:scale-105 ${color} ${shadow}text-white lg:w-[90%] lg:h-[220%] md:w-[93%] md:h-[195%] sm:w-[75%] sm:h-[188%] text-center rounded-2xl pt-4`}
            >
              <div>
                <h3 className="text-lg font-medium capitalize text-white">
                  {title}
                </h3>
                <h4 className="text-md font-normal capitalize text-white mb-3">
                  {text}
                </h4>
                <div className="mt-1 flex justify-center">
                  <button className="bg-white text-black text-base font-normal rounded-sm py-[2px] px-1">
                    ${price}
                  </button>
                  <p className="mx-6 text-base text-white font-medium flex flex-row items-center">
                    <AiFillStar className="mx-1 text-white" />
                    {rating}
                  </p>
                </div>
                <div
                  onClick={() => onAddToCart(id)}
                  className="flex justify-center text-black mt-3"
                >
                  <button className="p-1 rounded bg-white text-xl">
                    <BsFillBagCheckFill />
                  </button>
                  <button className="px-3 py-1 capitalize bg-white rounded ml-5 font-medium">
                    {btn}
                  </button>
                </div>
              </div>
              <img
                className="lg:w-[200px] lg:h-[200px] md:w-[170px] md:h-[170px] sm:w-[160px] sm:h-[160px] absolute lg:top-36 lg:left-2 xl:left-9 2xl:left-16 md:top-36 md:left-8 sm:top-36 sm:left-8 transitions-theme hover:rotate-[13deg] rotate-0 cursor-pointer"
                src={img}
                alt=""
              />
            </div>
          );
        })}
        {/* End of Items */}
      </div>
    </div>
  );
};

export default TopSales;
