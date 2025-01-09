import React from 'react';
import { Link } from 'react-router-dom';


const PaymentGetway = () => {
  return (
    <div className="p-4 font-sans text-base">
      <h2 className="text-2xl font-bold mb-4">Checkout Form</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-3/4 px-4 mb-4">
          <div className="bg-gray-100 p-4 border border-gray-300 rounded-md">
            <form action="/action_page.php">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <h3 className="text-xl font-semibold mb-4">Billing Address</h3>
                  <label htmlFor="fname" className="block mb-2">
                    <i className="fa fa-user text-gray-500 mr-2"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Faraz"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                  />
                  <label htmlFor="email" className="block mb-2">
                    <i className="fa fa-envelope text-gray-500 mr-2"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="codewithfaraz@example.com"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                  />
                  <label htmlFor="adr" className="block mb-2">
                    <i className="fa fa-address-card-o text-gray-500 mr-2"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="Mira Bhayandar Road"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                  />
                  <label htmlFor="city" className="block mb-2">
                    <i className="fa fa-institution text-gray-500 mr-2"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Mumbai"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                  />
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label htmlFor="state" className="block mb-2">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="MH"
                        className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label htmlFor="zip" className="block mb-2">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="400001"
                        className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-4 mb-4">
                  <h3 className="text-xl font-semibold mb-4">Payment</h3>
                  <label htmlFor="fname" className="block mb-2">Accepted Cards</label>
                  <div className="flex mb-4 space-x-4 text-2xl text-gray-600">
                    <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                    <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                    <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                    <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                  </div>
                  <label htmlFor="cname" className="block mb-2">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="Faraz"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                  />
                  <label htmlFor="ccnum" className="block mb-2">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                  />
                  <label htmlFor="expmonth" className="block mb-2">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="December"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                  />
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label htmlFor="expyear" className="block mb-2">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2027"
                        className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label htmlFor="cvv" className="block mb-2">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label className="block mb-4">
                <input type="checkbox" defaultChecked name="sameadr" className="mr-2" />
                Shipping address same as billing
              </label>
              <input
                type="submit"
                value="Continue to checkout"
                className="w-full bg-green-600 text-white py-3 mb-4 rounded-md cursor-pointer text-lg hover:bg-green-700"
              />
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4">
          <div className="bg-gray-100 p-4 border border-gray-300 rounded-md">
            <h4 className="text-xl font-semibold mb-4">Cart <span className="text-black"><i className="fa fa-shopping-cart mr-2"></i> <b>4</b></span></h4>
            <p className="flex justify-between mb-2"><Link to="#" className="text-blue-600">Item 1</Link> <span className="text-gray-600">$105</span></p>
            <p className="flex justify-between mb-2"><Link to="#" className="text-blue-600">Item 2</Link> <span className="text-gray-600">$95</span></p>
            <p className="flex justify-between mb-2"><Link to="#" className="text-blue-600">Item 3</Link> <span className="text-gray-600">$100</span></p>
            <p className="flex justify-between mb-2"><Link to="#" className="text-blue-600">Item 4</Link> <span className="text-gray-600">$50</span></p>
            <hr className="my-4 border-gray-300" />
            <p className="flex justify-between text-lg font-bold"><span>Total</span> <span className="text-black">$350</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGetway;