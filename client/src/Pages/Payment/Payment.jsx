import "./Payment.css";
import "../../App.css";
import Top from "../../Compt/Top/Top";
import SideBar from "../../Compt/SideBar/SideBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { WalletIcon, FileIcon, DollerSignIcon } from "lucide-react";

// import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";
// import Header from "../Dashboard/components/Header/Header";
// import Body from "../../Compt/Body/Body";
const Payment = () => {
  const location = useLocation();
  const { amount } = location.state || { amount: 0 }; // Default amount to 0 if state is undefined

  const currentBalance = 100; // Example starting balance
  const newBalance = currentBalance + amount;

  // useEffect(() => {
  //   if (amount > 0) {
  //     alert(`Recharge successful! Paid Amount: $${amount.toFixed(2)}`);
  //     amount == 0;
  //   }
  // }, [amount]);

  return (
    <div className="Bod">
      <div className="cont">
        <SideBar />
        <div className="mainContent">
          {/* <div className="stick"> */}
          <Top />
          {/* </div> */}
          <hr />
          <div className="bottom flex bg-gray-100 border-solid border-4 border-black rounded-3xl pl-6">
            <div className="flex  justify-center  min-h-[100dvh] w-full">
              {/* <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-lg md:text-xl">Payment</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>Wallet</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-bold">$500.00</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Available Balance
                          </div>
                          <Button
                            className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            variant="primary"
                          >
                            Add Money
                          </Button>
                        </div>
                        <WalletIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>Pending Bills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-bold">$75.00</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Pending Payments
                          </div>
                          <Button
                            className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            variant="primary"
                          >
                            Pay Now
                          </Button>
                        </div>
                        <FileIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>Total Paid</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-bold">$1,250.00</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Total Paid Amount
                          </div>
                        </div>
                        <DollarSignIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>Payment Options</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                          <WalletIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                          <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            UPI
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                          <CreditCardIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                          <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            Debit Card
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                          <CreditCardIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                          <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            Credit Card
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </main> */}
              {/* <main className="flex flex-col md:gap-8 md:p-6 bg-red-400">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-lg md:text-xl">Payment</h1>
                </div>
                <div className="gap-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white">
                    <CardHeader>
                      <WalletIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-2" />
                      <CardTitle>Wallet</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-bold">$500.00</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Available Balance
                          </div>
                          <Button
                            className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            variant="primary"
                          >
                            Add Money
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white">
                    <CardHeader>
                      <FileIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-2" />
                      <CardTitle>Pending Bills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-bold">$75.00</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Pending Payments
                          </div>
                          <Button
                            className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            variant="primary"
                          >
                            Pay Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white">
                    <CardHeader>
                      <DollarSignIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-2" />
                      <CardTitle>Total Paid</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-bold">$1,250.00</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Total Paid Amount
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="pl-4 ml-4 grid  gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <Card className="hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>Payment Options</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                          <WalletIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                          <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            UPI
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                          <CreditCardIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                          <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            Debit Card
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                          <CreditCardIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                          <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            Credit Card
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </main> */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8 lg:p-10 bg-[#F5F5F5] dark:bg-[#1E1E1E]">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-lg md:text-xl">Payment</h1>
                </div>
                <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <WalletIcon className="w-6 h-6 mr-2 text-[#6B7280]" />
                    <h3 className="text-lg font-semibold">Wallet</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#6B7280]">
                        Current Balance
                      </span>
                      <span className="text-lg font-semibold">$250.00</span>
                    </div>
                    <Button className="w-full" size="sm">
                      Add Money
                    </Button>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <TicketIcon className="w-6 h-6 mr-2 text-[#6B7280]" />
                    <h3 className="text-lg font-semibold">Pending Bills</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <LightbulbIcon className="w-6 h-6 mr-2 text-[#6B7280]" />
                        <span className="text-sm">Electricity Bill</span>
                      </div>
                      <Button size="sm">Pay</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <GlassWaterIcon className="w-6 h-6 mr-2 text-[#6B7280]" />
                        <span className="text-sm">Water Bill</span>
                      </div>
                      <Button size="sm">Pay</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <NetworkIcon className="w-6 h-6 mr-2 text-[#6B7280]" />
                        <span className="text-sm">Internet Bill</span>
                      </div>
                      <Button size="sm">Pay</Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <DollarSignIcon className="w-6 h-6 mr-2 text-[#6B7280]" />
                    <h3 className="text-lg font-semibold">Total Paid Amount</h3>
                  </div>
                  <div className="text-4xl font-bold">$1,250.00</div>
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white dark:bg-[#2C2C2C] rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Payment Options
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center justify-center p-4 bg-[#F5F5F5] dark:bg-[#3C3C3C] rounded-lg">
                      <WalletIcon className="w-6 h-6 mr-2 text-[#6B7280]" />
                      <span className="text-sm font-semibold">UPI</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-[#F5F5F5] dark:bg-[#3C3C3C] rounded-lg">
                      <CreditCardIcon className="w-6 h-6 mr-2 text-[#6B7280]" />
                      <span className="text-sm font-semibold">Debit Card</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-[#F5F5F5] dark:bg-[#3C3C3C] rounded-lg">
                      <CreditCardIcon className="w-6 h-6 mr-2 text-[#6B7280]" />
                      <span className="text-sm font-semibold">Credit Card</span>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8 lg:p-10 bg-[#f5f5f5] dark:bg-[#1a1a1a]">
                <h2 className="text-2xl font-semibold mb-4 text-center text-black font-bold">
                  Payment
                </h2>
                <div className="bg-white dark:bg-[#222222] rounded-lg shadow-md p-6 group hover:scale-105 transition-transform duration-300 hover:bg-black hover:text-white">
                  <div className="flex items-center mb-4">
                    <WalletIcon className="w-6 h-6 mr-2 text-primary group-hover:animate-bounce" />
                    <h3 className="text-lg font-semibold">Wallet</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400">
                        Current Balance
                      </span>
                      <span className="text-lg font-semibold">$250.00</span>
                    </div>
                    <Button size="sm">Add Money</Button>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#222222] rounded-lg shadow-md p-6 group hover:scale-105 transition-transform duration-300 hover:bg-gray-500 hover:text-white">
                  <div className="flex items-center mb-4">
                    <CalendarIcon className="w-6 h-6 mr-2 text-primary group-hover:animate-bounce" />
                    <h3 className="text-lg font-semibold">Pending Bills</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-gray-900 dark:text-gray-50 font-semibold">
                          <CarIcon className="w-5 h-5 mr-2 inline-block group-hover:animate-bounce" />
                          Uppal Fuel Bill
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          Due on 15th May
                        </p>
                      </div>
                      <Button size="sm">Pay</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-gray-900 dark:text-gray-50 font-semibold">
                          <BikeIcon className="w-5 h-5 mr-2 inline-block group-hover:animate-bounce" />
                          Balapur Station
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          Due on 20th May
                        </p>
                      </div>
                      <Button size="sm">Pay</Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#222222] rounded-lg shadow-md p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <DollarSignIcon className="w-6 h-6 mr-2 text-primary group-hover:animate-bounce" />
                    <h3 className="text-lg font-semibold">Total Paid Amount</h3>
                  </div>
                  <div className="text-4xl font-bold text-gray-400 dark:text-gray-50">
                    $1,250.00
                  </div>
                </div>
              </div> */}
              {/* <div className="bg-white dark:bg-[#222222] rounded-lg shadow-md p-6 mx-6 md:mx-8 lg:mx-10 mt-6">
                <h2 className="text-2xl font-semibold mb-4 text-center text-black font-bold">
                  Payment
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gray-100 dark:bg-[#333333] rounded-lg p-4 flex items-center group hover:scale-105 transition-transform duration-300">
                    <WalletIcon className="w-8 h-8 mr-2 text-primary group-hover:animate-bounce" />
                    <span className="text-gray-900 dark:text-gray-50 font-semibold">
                      UPI
                    </span>
                  </div>
                  <div className="bg-gray-100 dark:bg-[#333333] rounded-lg p-4 flex items-center group hover:scale-105 transition-transform duration-300">
                    <CreditCardIcon className="w-8 h-8 mr-2 text-primary group-hover:animate-bounce" />
                    <span className="text-gray-900 dark:text-gray-50 font-semibold">
                      Debit Card
                    </span>
                  </div>
                  <div className="bg-gray-100 dark:bg-[#333333] rounded-lg p-4 flex items-center group hover:scale-105 transition-transform duration-300">
                    <CreditCardIcon className="w-8 h-8 mr-2 text-primary group-hover:animate-bounce" />
                    <span className="text-gray-900 dark:text-gray-50 font-semibold">
                      Credit Card
                    </span>
                  </div>
                </div>
              </div> */}
              <div className="min-h-[95vh] bg-gray-100 dark:bg-gray-900 p-6 rounded-xl w-5/6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Wallet Card */}
                  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:bg-black hover:text-white">
                    <div className="p-6">
                      <div className="flex flex-col items-center mb-4">
                        <WalletIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-2" />
                        <h2 className="text-xl font-bold">Wallet</h2>
                      </div>
                      <div className="text-2xl font-bold text-center">
                        {/* $500.00 */}${newBalance.toFixed(4)}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                        Available Balance
                      </div>
                      <Link to={"/addmoney"}>
                        <button className="w-full bg-gray-900 text-gray-50 rounded-md py-2 px-4 text-sm font-medium shadow-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                          Add Money
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Pending Bills Card */}
                  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:bg-black hover:text-white">
                    <div className="p-6">
                      <div className="flex flex-col items-center mb-4">
                        <FileIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-2" />
                        <h2 className="text-xl font-bold">Pending Bills</h2>
                      </div>
                      <div className="text-2xl font-bold text-center">
                        $75.00
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                        Pending Payments
                      </div>
                      <button className="w-full bg-gray-900 text-gray-50 rounded-md py-2 px-4 text-sm font-medium shadow-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                        Pay Now
                      </button>
                    </div>
                  </div>

                  {/* Total Paid Card */}
                  <div className="bg-blue-400 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
                    <div className="p-6">
                      <div className="flex flex-col items-center mb-4">
                        <DollarSignIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-2" />
                        <h2 className="text-xl font-bold">Total Paid</h2>
                      </div>
                      <div className="text-2xl font-bold text-center">
                        $1,250.00
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                        Total Paid Amount
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                    Add Payment
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* UPI Option */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
                      <div className="p-6 flex flex-col items-center">
                        <CreditCardIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-4" />
                        <h3 className="text-xl font-bold">UPI</h3>
                        <button className="mt-4 w-full bg-gray-900 text-gray-50 rounded-md py-2 px-4 text-sm font-medium shadow-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                          Add UPI
                        </button>
                      </div>
                    </div>

                    {/* Debit Card Option */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
                      <div className="p-6 flex flex-col items-center">
                        <CreditCardIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-4" />
                        <h3 className="text-xl font-bold">Debit Card</h3>
                        <button className="mt-4 w-full bg-gray-900 text-gray-50 rounded-md py-2 px-4 text-sm font-medium shadow-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                          Add Debit Card
                        </button>
                      </div>
                    </div>

                    {/* Credit Card Option */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
                      <div className="p-6 flex flex-col items-center">
                        <CreditCardIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-4" />
                        <h3 className="text-xl font-bold">Credit Card</h3>
                        <button className="mt-4 w-full bg-gray-900 text-gray-50 rounded-md py-2 px-4 text-sm font-medium shadow-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                          Add Credit Card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <a href="/">To LogOut</a> */}
      </div>
    </div>
  );
};

// function CreditCardIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="14" x="2" y="5" rx="2" />
//       <line x1="2" x2="22" y1="10" y2="10" />
//     </svg>
//   );
// }

// function DollarSignIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="12" x2="12" y1="2" y2="22" />
//       <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//     </svg>
//   );
// }

// // function FileIcon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
// //       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
// //     </svg>
// //   );
// // }

// function WalletIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
//       <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
//     </svg>
//   );
// }

// function CreditCardIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="14" x="2" y="5" rx="2" />
//       <line x1="2" x2="22" y1="10" y2="10" />
//     </svg>
//   );
// }

// function DollarSignIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="12" x2="12" y1="2" y2="22" />
//       <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//     </svg>
//   );
// }

// function GlassWaterIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
//       <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
//     </svg>
//   );
// }

// function LightbulbIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
//       <path d="M9 18h6" />
//       <path d="M10 22h4" />
//     </svg>
//   );
// }

// function NetworkIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="16" y="16" width="6" height="6" rx="1" />
//       <rect x="2" y="16" width="6" height="6" rx="1" />
//       <rect x="9" y="2" width="6" height="6" rx="1" />
//       <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
//       <path d="M12 12V8" />
//     </svg>
//   );
// }

// function TicketIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
//       <path d="M13 5v2" />
//       <path d="M13 17v2" />
//       <path d="M13 11v2" />
//     </svg>
//   );
// }

// function WalletIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
//       <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
//     </svg>
//   );
// }

// function BikeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="18.5" cy="17.5" r="3.5" />
//       <circle cx="5.5" cy="17.5" r="3.5" />
//       <circle cx="15" cy="5" r="1" />
//       <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
//     </svg>
//   );
// }

// function CalendarIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M8 2v4" />
//       <path d="M16 2v4" />
//       <rect width="18" height="18" x="3" y="4" rx="2" />
//       <path d="M3 10h18" />
//     </svg>
//   );
// }

// function CarIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
//       <circle cx="7" cy="17" r="2" />
//       <path d="M9 17h6" />
//       <circle cx="17" cy="17" r="2" />
//     </svg>
//   );
// }

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
export default Payment;
