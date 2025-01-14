import { useState } from 'react'
import { InputBox } from './components'
import userCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const useCurrencyInfo = userCurrencyInfo(from)
  console.log(useCurrencyInfo[to]);
  const options = Object.keys(useCurrencyInfo)
  
  

  const swap = () => {
    setfrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    const result = amount * useCurrencyInfo[to]
    setConvertedAmount(result)
  }
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2522676/pexels-photo-2522676.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setfrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(value) => setAmount(value)}


                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  onClick={swap}
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"

                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable

                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
