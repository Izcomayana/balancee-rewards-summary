import React, { useEffect } from "react";
import CashoutOptions from "./components/CashoutOptions";
import { Card } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Cashout: React.FC = () => {
  const min = 100;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <main>
        <div className="container mx-auto px-4 py-4 pb-40 lg:pt-10 xl:px-0">
          <div className="flex justify-between items-center">
            <h1
              className="text-gray-800 text-xl montserrat font-bold md:text-2xl"
              data-aos="fade-down"
            >
              Cash Out Your Rewards
            </h1>
          </div>

          <div className="my-10">
            <Card
              className="p-6 w-full max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-xl">Available balance</p>
              </div>

              <p className="mt-10 text-2xl text-gray-800 font-bold">₦21, 200</p>
              <span className="text-xs text-gray-700">
                min cash out: ₦{min}
              </span>
            </Card>
          </div>

          <div className="">
            <CashoutOptions />
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Cashout;
