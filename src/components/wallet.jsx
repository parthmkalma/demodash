import React from "react";

const WalletCard = () => {
  return (
    <div className="card bg-white border border-gray-200">
      <div className="card-body p-4">
        <div>
          <div className="grid items-center grid-cols-12 gap-6">
            {/* Wallet Info */}
            <div className="col-span-6">
              <span className="text-gray-700">My Wallet</span>
              <h4 className="my-4 font-medium text-gray-800 text-xl">
                $
                <span className="counter-value" data-target="865.2">
                  865.2
                </span>
                k
              </h4>
            </div>
            {/* Chart Section */}
            <div className="col-span-6">
              <div
                id="mini-chart1"
                data-colors='["#5156be"]'
                className="mb-2 apex-charts"
              ></div>
            </div>
          </div>
        </div>
        {/* Growth Info */}
        <div className="flex items-center mt-1">
          <span className="text-[10px] py-[1px] px-1 bg-green-500/40 text-green-500 rounded font-medium">
            + $20.9k
          </span>
          <span className="ml-2 text-gray-700 text-sm">Since last week</span>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
