import Donuts from "../Donuts";
import PropertyReferrals from "../PropertyReferrals";
import TotalRevenue from "../TotalRevenue";

function Main() {
  const options = [
    {
      title: "Properties for Sale",
      number: 684,
      series: [75, 25],
      colors: ["#275be8", "#c4e8ef"],
    },
    {
      title: "Properties for Rent",
      number: 550,
      series: [60, 40],
      colors: ["#275be8", "#c4e8ef"],
    },
    {
      title: "Total customers",
      number: 5684,
      series: [75, 25],
      colors: ["#275be8", "#c4e8ef"],
    },
    {
      title: "Properties for Cities",
      number: 472,
      series: [75, 25],
      colors: ["#275be8", "#c4e8ef"],
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-medium text-zinc-800/90">Dashboard</h1>

      <div className="grid grid-template-cols gap-6">
        {options.map(
          ({
            title,
            number,
            series,
            colors,
          }: {
            title: string;
            number: number;
            series: number[];
            colors: string[];
          }) => {
            return (
              <Donuts
                colors={colors}
                number={number}
                series={series}
                title={title}
                key={title}
              />
            );
          }
        )}
      </div>

      <div className="flex gap-4">
        <TotalRevenue />

        <PropertyReferrals />
      </div>
    </>
  );
}

export default Main;
