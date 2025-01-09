import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { steps } from '../../mockData/data';
import { componentOptions } from '../../mockData/data';



function ComputerConfigurator() {
  const [selectedItems, setSelectedItems] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSelect = (stepId, item) => {
    setSelectedItems(prev => ({ ...prev, [stepId]: item }));
    setOpenDropdown(null); // Close dropdown after selection
  };

  const toggleDropdown = (stepId) => {
    setOpenDropdown(prev => (prev === stepId ? null : stepId));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Add a title
    doc.setFontSize(18);
    doc.text('JBR Shop', 10, 10);
    doc.setFontSize(12);
    doc.text('Powered by Anand Maurya', 10, 20);
    doc.text('Email: am6429975@gmail.com', 10, 30);
    doc.text('Address: Ramabai colony ghatkopar East Mum-400075', 10, 40);
    doc.text('Website: www.jbrshop.in', 10, 50);
  
    // Add a line break
    doc.setLineWidth(0.5);
    doc.line(10, 55, 200, 55);
  
    // Add product details
    doc.setFontSize(16);
    doc.text('Product Builder', 10, 65);
  
    // Table columns and rows
    const tableColumn = ['Product', 'Quantity', 'Price', 'Subtotal'];
    const tableRows = [];
  
    // Initialize total price
    let totalPrice = 0;
  
    // Process each selected item
    Object.keys(selectedItems).forEach((key) => {
      const item = selectedItems[key];
      
      // Debugging
      console.log('Item:', item);
  
      // Validate item fields
      const name = item.name || 'Unknown'; // Fallback if name is undefined
      const quantity = Number(item.quantity) || 1; // Ensure quantity is a number, default to 1
      const price = Number(item.price) || 0; // Ensure price is a number, default to 0
      const subtotal = price * quantity;
  
      // Debugging
      console.log('Quantity:', quantity, 'Price:', price, 'Subtotal:', subtotal);
  
      // Accumulate total price
      totalPrice += subtotal;
  
      // Prepare row for the table
      tableRows.push([
        name,
        quantity,
        `${price.toLocaleString()}`,
        `${subtotal.toLocaleString()}`,
      ]);
    });
  
    // Generate the table
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 75,  // Start the table at position Y = 75
    });
  
    // Get the final Y position after the table is drawn
    const finalY = doc.autoTable.previous.finalY || 75;  // Y-coordinate of the end of the table
  
    // Debugging
    console.log('Total Price:', totalPrice);
  
    // Add total price to the PDF
    doc.setFontSize(14);
    doc.text(`Total: ${totalPrice.toLocaleString()}`, 10, finalY + 10); // Place the total 10 units below the table
  
    // Save the PDF
    doc.save('pc-build.pdf');
  };
  
  

  const removeAll = () => {
    // Remove all selections but keep the summary section intact
    setSelectedItems({});
  };

  return (
    <div className="flex flex-wrap justify-center">
      {/* Left column for the selections */}
      <div className="w-full md:w-[45%] p-4 space-y-4 ">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md p-4 flex items-center space-x-4">
            <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{step.title}</h2>
              <button
                onClick={() => toggleDropdown(index)}
                className={`w-full mt-2 p-2 text-white rounded-lg ${selectedItems[index] ? 'bg-third' : 'bg-secondary'} `}
              >
                {selectedItems[index] ? `${selectedItems[index].name} - $${selectedItems[index].price}` : 'Select'}
              </button>
              {openDropdown === index && (
                <div className="mt-4 bg-white border rounded-lg shadow-lg p-4">
                  <ul className="list-none">
                    {componentOptions[index].map((option, idx) => (
                      <li
                        key={idx}
                        className={`p-2 cursor-pointer rounded-lg hover:bg-gray-200 ${selectedItems[index]?.name === option.name ? 'bg-gray-200' : ''}`}
                        onClick={() => handleSelect(index, option)}
                      >
                        {option.name} - ${option.price}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right column for summary */}
      <div className="w-full md:w-[45%] bg-fourth/20 p-4 space-y-4 rounded-lg mt-4 mb-3">
        <h3 className="text-lg font-semibold">Summary</h3>
        <ul>
          {steps.map((step, index) =>
            selectedItems[index] ? (
              <li key={index} className="flex justify-between">
                <span>{selectedItems[index].name}</span>
                <span>${selectedItems[index].price}</span>
              </li>
            ) : null
          )}
        </ul>
        <div className="flex justify-between font-bold mt-4">
          <span>Total:</span>
          <span>${Object.values(selectedItems).reduce((total, item) => total + item.price, 0)}</span>
        </div>
        <button
          onClick={generatePDF}
          className="w-full bg-secondary text-white p-2 mt-4 rounded hover:font-semibold"
        >
          Download PDF
        </button>
        
        <button
          onClick={removeAll}
          className="w-full bg-black text-white p-2 mt-2 rounded hover:bg-gray-700"
        >
          Remove All
        </button>
      </div>
    </div>
  );
}

export default ComputerConfigurator;
