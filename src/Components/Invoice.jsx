import React from "react";
import { formatCurrency } from "../utilities/formatCurrency";
const Invoice = () => {
  return (
    <main className="relative w-full h-fit flex flex-row bg-white py-4 pl-5 pr-10 justify-between">
      <section>
        <h1 className="font-medium">John Doe</h1>
        <span className="font-light leading-tight text-sm">INV-000126</span>
        <span className="font-light"> | </span>
        <span className="font-light">15/06/24</span>
      </section>
      <section className="font-medium flex flex-col items-end">
        <h1>{formatCurrency(2200)}</h1>
        <span className="font-light">Paid</span>
      </section>
    </main>
  );
};

export default Invoice;
