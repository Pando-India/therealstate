import React, { useState } from 'react';
import { FaSortDown  } from "react-icons/fa";


const MortgageCalculator = () => {
  const [formData, setFormData] = useState({
    price: '',
    deposit: '',
    rate: '',
    loanTerm: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add mortgage calculation logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full max-w-sm 2xl:max-w-sm mx-auto p-6 2xl:p-10 bg-white rounded-3xl shadow-lg h-fit">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Mortgage Calculator
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <select 
            className="w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
          >
            <option value="" disabled selected>Price</option>
            <option value="100000">$100,000</option>
            <option value="200000">$200,000</option>
            <option value="300000">$300,000</option>
          </select>
          <FaSortDown  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <div className="relative">
          <select 
            className="w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
            value={formData.deposit}
            onChange={(e) => setFormData({...formData, deposit: e.target.value})}
          >
            <option value="" disabled selected>Deposit</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
          </select>
          <FaSortDown  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <div className="relative">
          <select 
            className="w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
            value={formData.rate}
            onChange={(e) => setFormData({...formData, rate: e.target.value})}
          >
            <option value="" disabled selected>Rate</option>
            <option value="3">3%</option>
            <option value="3.5">3.5%</option>
            <option value="4">4%</option>
          </select>
          <FaSortDown  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <div className="relative">
          <select 
            className="w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
            value={formData.loanTerm}
            onChange={(e) => setFormData({...formData, loanTerm: e.target.value})}
          >
            <option value="" disabled selected>Loan Term</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="30">30 years</option>
          </select>
          <FaSortDown  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <button 
          type="submit"
          className="w-full py-3 bg-[#0a7847] hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          Calculate
        </button>
      </form>
    </div>
  );
};

export default MortgageCalculator;