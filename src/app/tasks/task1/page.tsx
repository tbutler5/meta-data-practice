'use client'

import Link from 'next/link';
import { useEffect, useState } from "react";
import { BillingPlan, LegalInfo } from "@/types";
import React from 'react';

export default function Task1Page() {
    const [billingPlans, setBillingPlans] = useState<BillingPlan[]>([]);
    const [legalInfo, setLegalInfo] = useState<LegalInfo>();
    
    useEffect(() => {
        const getBillingPlans = async () => {
            try {
                const response = await fetch('/data/billing-plans-data.json');
                const jsonData = await response.json();
                setBillingPlans(jsonData.billingPlans);
                setLegalInfo(jsonData.legalInfo)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getBillingPlans()
    }, [])

    if(billingPlans.length < 1) {
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
                <h1 className="text-2xl font-bold">Task 1: Customer Invoice Display</h1>
                <p>Implement logic to read, iterate, and display customer invoice data here.</p>
            </div>
            <div className="overflow-x-auto p-4 bg-gray-800 rounded-lg shadow">
            {billingPlans.length > 0 ? (
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
                        Plan Name
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-2 border border-gray-600 text-left font-semibold"
                        role="columnheader"
                        tabIndex={0}
                    >
                        Price Per Month
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-2 border border-gray-600 text-left font-semibold"
                        role="columnheader"
                        tabIndex={0}
                    >
                        Max Users
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-2 border border-gray-600 text-left font-semibold"
                        role="columnheader"
                        tabIndex={0}
                    >
                        Features
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {billingPlans.map((plan, index) => (
                    <React.Fragment key={index}>
                        {plan.isActive ? (
                        <tr className="text-gray-300" role="row">
                            <td
                            className="px-4 py-2 border border-gray-600"
                            role="cell"
                            tabIndex={0}
                            aria-label={`Details for ${plan.planName}`}
                            >
                            {plan.planName}
                            </td>
                            <td
                            className="px-4 py-2 border border-gray-600"
                            role="cell"
                            tabIndex={0}
                            aria-label={`Details for monthly price`}
                            >
                            ${plan.pricePerMonth} / {plan.billingCycle}
                            </td>
                            <td
                            className="px-4 py-2 border border-gray-600"
                            role="cell"
                            tabIndex={0}
                            aria-label={`Details for maximum users`}
                            >
                            {plan.maxUsers}
                            </td>
                            <td
                            className="px-4 py-2 border border-gray-600"
                            role="cell"
                            tabIndex={0}
                            aria-label={`Details for plan features`}
                            >
                            {plan.features.length > 0
                                ? plan.features.join(", ")
                                : "No features listed"}
                            </td>
                        </tr>
                        ) : (
                        <tr 
                            className="text-gray-300 bg-gray-800" 
                            role="row"
                            tabIndex={0}
                            aria-label="No active plans available">
                                <td
                                colSpan={4}
                                className="px-4 py-2 border border-gray-600 text-center"
                                role="cell"
                                >
                                No active plans available. Please contact support for
                                more details.
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
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg shadow">
                <p className="text-lg font-semibold" role="contentinfo" aria-label="Legal Disclaimer">
                    {legalInfo?.notice}
                </p>
                <p>
                    Visit our website for more details 
                    <a 
                        href="https://example.com" 
                        className="text-blue-400 underline mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300" 
                        role="link" 
                        aria-label="Visit example website for more information"
                    >
                        {legalInfo?.termsUrl}.
                    </a>
                </p>
                </div>
        </>
    );
}