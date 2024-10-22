import React, { useContext, useEffect, useState } from "react";
import CartContext from "../CartContext";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import mc from "../assets/mc.jpg";
import visa from "../assets/visa.jpg"
import amex from "../assets/amex.png"
import dis from "../assets/dis.jpg"


const cardLogos = {
  visa: visa,
  mastercard: mc,
  amex: amex,
  discover: dis,
};

const Checkout = () => {
  const {removeFromCart, getCartItemDetails, clearCart } = useContext(CartContext);
  const [rejectPayment, setRejectPayment] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);
  const [cardNumber, setCardNumber] = useState(''); 
  const [cardType, setCardType] = useState(''); 

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleVoucher = () => {
    setInvalidCode(!invalidCode);
  };
  const cartItemDetails = getCartItemDetails();

  const total = cartItemDetails.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleClearAll = () => {
    clearCart();
    localStorage.removeItem("oldcart"); 
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getCardType = (cardNumber) => {
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
      return 'visa';
    } else if (/^5[1-5][0-9]{14}$/.test(cardNumber)) {
      return 'mastercard';
    } else if (/^3[47][0-9]{13}$/.test(cardNumber)) {
      return 'amex';
    } else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(cardNumber)) {
      return 'discover';
    } else {
      return 'unknown'; 
    }
  };


  const handleCardNumberChange = (e) => {
    const newCardNumber = e.target.value;
    setCardNumber(newCardNumber);

   
    const type = getCardType(newCardNumber);
    setCardType(type);
  };

  return (
    <div className="container relative mt-40 lg:mt-20 mx-auto p-5">
      <div className="px-6 lg:mx-5 lg:mt-6">
        <h1 className="font-bold text-2xl lg:text-3xl p-5 text-left">
          Check <span className="text-orange-500">Out</span>
        </h1>
        <hr className="my-3 border-orange-500"></hr>
        {cartItemDetails.length === 0 ? (
          <div>
            <p className="m-4 p-5 text-xl border-orange-500">Empty Cart... </p>
            <div className="flex justify-center items-center mt-5 p-3">
              <Link
                to="/menu"
                className="flex justify-center items-center p-2 rounded-lg cursor-pointer hover-bg-orange-100 hover-shadow-sm text-orange-500"
              >
                <div className="">View Menu</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          <div className="m-5 flex flex-col justify-between items-center lg:items-start lg:flex-row">
            <div className="p-0 m-0">
              <div className="flex vs:pl-6 vs:w-[250px] w-[275px] flex-col justify-center items-center ">
                {cartItemDetails.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 justify-center items-center p-1"
                  >
                    <div className="flex w-[275px] h-[62px] vs:w-[250px] justify-between bg-white items-center border-2 border-orange-200 shadow-orange-200 shadow-2xl rounded-e-full"> 
                      <div className="flex w-[275px] h-[62px] vs:w-[250px] bg-orange-100 justify-between border rounded-e-full border-orange-500">
                        <div className="flex w-[230px] h-[62px] vs:w-[180px] justify-between items-center px-2">
                          <div className="flex flex-col">
                            <h3 className="text-sm">{item.name}</h3>
                           <div className="pl-2">
                           <span className="text-xs font-semibold">
                              x{item.quantity}
                            </span>
                           </div>
                          </div>
                          <p className="text-sm w-16 font-bold">${item.price}</p>
                        </div>
                      </div>
                      <div
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="m-1 p-2 rounded-full cursor-pointer hover-bg-red-600 hover-text-white"
                      >
                        <AiOutlineClose className="">
                          Remove from Cart
                        </AiOutlineClose>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex py-5">
                <div className="flex rounded-full gap-2">
                  <input
                    className="border-orange-400 shadow-orange-200 shadow-2xl rounded-3xl p-2 w-[200px] vs:w-[170px] focus-outline-none placeholder-orange-300"
                    type="text"
                    placeholder="Promocode.."
                  />
                  <button
                    onClick={handleVoucher}
                    className="bg-orange-500 text-black rounded-full px-5 hover-bg-orange-800 hover-text-white shadow-orange-200 shadow-2xl hover-border-none"
                  >
                    Apply
                  </button>
                </div>
                {invalidCode && <p className="text-red pl-2 pt-1">Invalid Voucher Code</p>}
              </div>
              <hr className="border-black my-0"></hr>
              <div className="p-3 flex justify-between mt-5">
                <h3 className="mt-1">Total:</h3>
                <p className="text-2xl font-bold">${total.toFixed(2)}</p>
              </div>
              <div className="mt-1 p-3 w-[250px] ">
                <button
                  onClick={handleClearAll}
                  className="border w-[250px] shadow-red-400 shadow-2xl border-red-500 py-1 text-red-500 rounded-full px-4 hover:bg-red-500 hover:text-white hover:border-none"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            <div className="mt-5 p-5 border shadow-orange-300 shadow-2xl border-orange-200 rounded-2xl bg-white">
              <h1 className="font-bold mb-2 underline-offset-1">Shipping :</h1>
              <div className="mb-3">
                <label className="text-orange-600 font-semibold text-sm mb-2 ml-1">
                  Full Name
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border border-orange-500 rounded-md focus-outline-none focus-border-indigo-500 transition-colors"
                    placeholder="John Smith"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="text-orange-600 font-semibold text-sm mb-2 ml-1">
                  Address
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border border-orange-500 rounded-md focus-outline-none focus-border-indigo-500 transition-colors"
                    placeholder="123 Main St"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="text-orange-600 font-semibold text-sm mb-2 ml-1">
                  Phone Number
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border border-orange-500 rounded-md focus-outline-none focus-border-indigo-500 transition-colors"
                    placeholder="080XXXXXXXX"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="text-orange-600 font-semibold text-sm mb-2 ml-1">
                  Card number
                </label>
                <div className="relative">
                  <input
                    className="w-full px-3 py-2 mb-1 border border-orange-500 rounded-md focus-outline-none focus-border-indigo-500 transition-colors"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                  />
                  {cardType && cardLogos[cardType] && (
                    <img
                      src={cardLogos[cardType]}
                      alt={`${cardType} logo`}
                      className="absolute right-4 bottom-2 h-8 w-10"
                    />
                  )}
                </div>
              </div>
              <div className="mb-3 -mx-2 flex items-end">
                <div className="px-2 w-1/4">
                  <label className="text-orange-600 font-semibold text-sm mb-2 ml-1">
                    Expiration date
                  </label>
                  <div>
                    <select
                      className="form-select w-full px-3 py-2 mb-1 border border-orange-500 rounded-md focus-outline-none focus-border-indigo-500 transition-colors cursor-pointer"
                    >
                      <option value="01">01 - January</option>
                      <option value="02">02 - February</option>
                      <option value="03">03 - March</option>
                      <option value="04">04 - April</option>
                      <option value="05">05 - May</option>
                      <option value="06">06 - June</option>
                      <option value="07">07 - July</option>
                      <option value="08">08 - August</option>
                      <option value="09">09 - September</option>
                      <option value="10">10 - October</option>
                      <option value="11">11 - November</option>
                      <option value="12">12 - December</option>
                    </select>
                  </div>
                </div>
                <div className="px-2 w-1/4">
                  <select
                    className="form-select w-full px-3 py-2 mb-1 border border-orange-500 rounded-md focus-outline-none focus-border-indigo-500 transition-colors cursor-pointer"
                  >
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>
                <div className="px-2 w-1/4">
                  <label className="text-orange-600 font-semibold text-sm mb-2 ml-1">
                    Security code
                  </label>
                  <div>
                    <input
                      className="w-full px-3 py-2 mb-1 border border-orange-500 rounded-md focus-outline-none focus-border-indigo-500 transition-colors"
                      placeholder="000"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-20 flex justify-center">
                <button
                  onClick={() => setRejectPayment(true)}
                  className="py-2 rounded-full px-4 bg-orange-300 text-black hover-bg-orange-500 hover-text-white hover-border-none"
                >
                  Proceed With Payment
                </button>
              </div>
              <div className="mt-2 flex justify-center">
                {rejectPayment ? (
                  <p className="text-red-500 pt-2 text-sm animate-bounce">Invalid Payment Details</p>
                ) : (
                  <p></p>
                )}
              </div>
    </div>
  );
};

export default Checkout;
