import React from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import User from "../UI/User";
const Customer = () => {
  return (
    <main className="relative w-full h-fit flex flex-row bg-white py-4 pl-6 items-center font-medium  justify-between">
      <section className="flex flex-row h-full items-center gap-2 flex-1">
        <User />
        <h1 className="font-medium">John Doe</h1>
      </section>
      <section className="flex-1 ">Winston</section>
      <section className="flex-1">2</section>
      <section className="font-medium  flex-1">{formatCurrency(2200)}</section>
      <section className="flex-1">+91 8889990000</section>
    </main>
  );
};

export default Customer;
