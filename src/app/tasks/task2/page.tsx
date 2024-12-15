'use client'

import { CustomerInvoice } from '@/types';
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Task2Page() {
    const [invoices, setInvoices] = useState<CustomerInvoice[]>([]);
    
    useEffect(() => {
        const getBillingPlans = async () => {
            try {
                const response = await fetch('/data/customer-invoice-data.json');
                const jsonData = await response.json();
                console.log(jsonData)
                setInvoices(jsonData.invoices);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getBillingPlans()
    }, [])

    if(invoices.length < 1) {
        return (
            <>
                <p>...Loading</p>
            </>
        )
    }

    return (
        <>
            <Link href="/" >
                <div className="p-6 space-y-4">
                    <p className="text-blue-500 hover:underline">Home</p>
                </div>
            </Link>
            <div className="p-6">
                <h1 className="text-2xl font-bold">Task 2: Customer Invoice Display</h1>
                <p>Implement logic to read, iterate, and display customer invoice data here.</p>
            </div>
            <div className="overflow-x-auto p-4 bg-gray-800 rounded-lg shadow">
            {invoices.length > 0 ? (
                <table
                className="table-auto w-full border-collapse border border-gray-700"
                role="table"
                aria-label="Billing Plans"
                >
                <thead>
                    <tr className="bg-gray-700 text-white" role="row">
                    <th
                        scope="col"
                        className="px-4 py-2 border border-gray-600 text-left font-semibold"
                        role="columnheader"
                        tabIndex={0}
                    >
                        Invoice Number
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-2 border border-gray-600 text-left font-semibold"
                        role="columnheader"
                        tabIndex={0}
                    >
                        Customer Name
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-2 border border-gray-600 text-left font-semibold"
                        role="columnheader"
                        tabIndex={0}
                    >
                        Amount Due
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-2 border border-gray-600 text-left font-semibold"
                        role="columnheader"
                        tabIndex={0}
                    >
                        Due Date
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-2 border border-gray-600 text-left font-semibold"
                        role="columnheader"
                        tabIndex={0}
                    >
                        Invoice Type
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => (
                    <React.Fragment key={index}>
                        {invoice ? (
                        <tr className="text-gray-300" role="row">
                            <td
                            className="px-4 py-2 border border-gray-600"
                            role="cell"
                            tabIndex={0}
                            aria-label={`Details for ${invoice.invoiceId}`}
                            >
                            {invoice.invoiceId}
                            </td>
                            <td
                            className="px-4 py-2 border border-gray-600"
                            role="cell"
                            tabIndex={0}
                            aria-label={`Details for customer namee`}
                            >
                            {invoice.customer.name}
                            </td>
                            <td
                            className="px-4 py-2 border border-gray-600"
                            role="cell"
                            tabIndex={0}
                            aria-label={`Details for amount due`}
                            >
                            {invoice.amountDue}
                            </td>
                            <td
                            className="px-4 py-2 border border-gray-600"
                            role="cell"
                            tabIndex={0}
                            aria-label={`Details for plan features`}
                            >
                            {invoice.dueDate}
                            </td>
                            <td
                            className="px-4 py-2 border border-gray-600"
                            role="cell"
                            tabIndex={0}
                            aria-label={`Details for plan features`}
                            >
                            {invoice.invoiceType}
                            </td>
                        </tr>
                        ) : (
                        <tr 
                            className="text-gray-300 bg-gray-800" 
                            role="row"
                            tabIndex={0}
                            aria-label="No active invoice">
                                <td
                                colSpan={5}
                                className="px-4 py-2 border border-gray-600 text-center"
                                role="cell"
                                >
                                No invoices available for this customer.
                                </td>
                        </tr>
                        )}
                    </React.Fragment>
                    ))}
                </tbody>
                </table>
            ) : (
            <div
                className="text-center text-gray-300 bg-gray-800 p-4 rounded-md"
                role="alert"
                tabIndex={0}
                >
                No billing plans found. Please upload the data or try again later.
            </div>
            )}
            </div>
        </>
    );
}