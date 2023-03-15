const propertyReferralsInfo = [
  {
    title: "Social Media",
    percentage: "64%",
    color: "border-[#6C5DD3]",
  },
  {
    title: "Marketplace",
    percentage: "40%",
    color: "border-[#7FBA7A]",
  },
  {
    title: "Websites",
    percentage: "50%",
    color: "border-[#FFCE73]",
  },
  {
    title: "Digital Ads",
    percentage: "80%",
    color: "border-[#FFA2C0]",
  },
  {
    title: "Others",
    percentage: "15%",
    color: "border-[#F45252]",
  },
];

function PropertyReferrals() {
  return (
    <div className="w-[40%] bg-white rounded-lg p-4">
      <h3 className="text-xl mb-3">Property Referrals</h3>

      <div className="flex flex-col gap-4">
        {propertyReferralsInfo.map(
          ({ color, percentage, title }, i: number) => {
            return (
              <div className="flex flex-col gap-2" key={i}>
                <div className="text-lg flex justify-between">
                  <p>{title}</p>

                  <p>{percentage}</p>
                </div>

                <div
                  className={`w-full h-[6px] bg-gray-200 rounded-lg relative`}
                >
                  <div
                    className={`border-[3px] rounded-lg ${color}`}
                    style={{ width: percentage }}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default PropertyReferrals;
