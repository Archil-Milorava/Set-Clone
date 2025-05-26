import { useState } from "react";

const FilterSection = () => {
  const [selectedCountry, setSelectedCountry] = useState("ALL");

  const allCountries = [
    "ALL",
    ...new Set(
      sportsAvailability
        .flatMap((sport) => sport.availableCountries)
        .filter((country) => country !== "ALL")
        .sort()
    ),
  ];

  const filteredSports = sportsAvailability.filter(
    (sport) =>
      selectedCountry === "ALL" ||
      sport.availableCountries.includes(selectedCountry)
  );

  return (
    <div className=" bg-white mx-[10rem] my-[5rem] p-8 rounded-xl hidden sm:block">
      <div className="mb-6">
        <p className="text-yellow-300 uppercase font-bold text-2xl">
          You'll See
        </p>
        <h1 className="font-bold text-5xl mb-4 uppercase">Top Leagues</h1>
        <div className="bg-gray-500/50 h-[1px] my-4"></div>
        {/* Country Filters */}
        <p className="my-6 text-lg font-semibold">Choose your country to see available content</p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {allCountries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={` text-xs cursor-pointer  transition-colors ${
                selectedCountry === country ? " " : "opacity-50"
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      {/* Sports Grid - Images Only */}
      <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 ">
        {filteredSports.map((sport) => (
          <div
            key={sport.name}
            className="aspect-square flex items-center justify-center p-1 bg-white rounded hover:shadow-md "
            title={sport.name}
          >
            <img
              src={sport.imageUrl}
              alt={sport.name}
              className="w-full h-full object-contain p-1"
            />
          </div>
        ))}
      </div>

      {filteredSports.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No leagues available for selected country
        </div>
      )}
    </div>
  );
};

export default FilterSection;

const sportsAvailability = [
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/EPL-300x300.png",
    name: "English Premier League",
    availableCountries: [
      "ALL",
      "GEORGIA",
      "MOLDOVA",
      "KAZAKHSTAN",
      "UKRAINE",
      "LATVIA",
      "LITHUANIA",
      "ESTONIA",
      "AZERBAIJAN",
      "KYRGYZSTAN",
      "UZBEKISTAN",
      "TAJIKISTAN",
      "PHILIPPINES",
    ],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/Serie-A-300x300.png",
    name: "Serie A",
    availableCountries: [
      "ALL",
      "GEORGIA",
      "MOLDOVA",
      "KAZAKHSTAN",
      "UKRAINE",
      "LATVIA",
      "LITHUANIA",
      "ESTONIA",
      "AZERBAIJAN",
      "KYRGYZSTAN",
      "UZBEKISTAN",
      "TAJIKISTAN",
      "PHILIPPINES",
    ],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/Ligue-1-Mcdonalds-300x300.png",
    name: "Ligue 1",
    availableCountries: [
      "ALL",
      "GEORGIA",
      "MOLDOVA",
      "KAZAKHSTAN",
      "UKRAINE",
      "LATVIA",
      "LITHUANIA",
      "ESTONIA",
      "AZERBAIJAN",
      "KYRGYZSTAN",
      "UZBEKISTAN",
      "TAJIKISTAN",
    ],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/Bundesliga-300x300.png",
    name: "Bundesliga",
    availableCountries: [
      "ALL",
      "GEORGIA",
      "MOLDOVA",
      "KAZAKHSTAN",
      "UKRAINE",
      "LATVIA",
      "LITHUANIA",
      "ESTONIA",
      "AZERBAIJAN",
      "KYRGYZSTAN",
      "UZBEKISTAN",
    ],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/Bundesliga-2-300x300.png",
    name: "Bundesliga 2",
    availableCountries: [
      "ALL",
      "GEORGIA",
      "MOLDOVA",
      "KAZAKHSTAN",
      "UKRAINE",
      "LATVIA",
      "LITHUANIA",
      "ESTONIA",
      "AZERBAIJAN",
    ],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/German-Supercup-300x300.png",
    name: "German Supercup",
    availableCountries: [
      "ALL",
      "GEORGIA",
      "MOLDOVA",
      "KAZAKHSTAN",
      "UKRAINE",
      "LATVIA",
      "LITHUANIA",
    ],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/La-Liga-300x300.png",
    name: "La Liga",
    availableCountries: [
      "ALL",
      "GEORGIA",
      "MOLDOVA",
      "KAZAKHSTAN",
      "UKRAINE",
      "LATVIA",
    ],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/efl-championship-300x300.png",
    name: "EFL Championship",
    availableCountries: ["ALL", "GEORGIA", "MOLDOVA", "KAZAKHSTAN", "UKRAINE"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/efl_leagueone-300x300.png",
    name: "EFL League One",
    availableCountries: ["ALL", "GEORGIA", "MOLDOVA", "KAZAKHSTAN"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/efl_leaguetwo-300x300.png",
    name: "EFL League Two",
    availableCountries: ["ALL", "GEORGIA", "MOLDOVA"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/Eredivisie-300x300.png",
    name: "Eredivisie",
    availableCountries: ["ALL", "GEORGIA"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/12/SPFL-300x300.png",
    name: "SPFL",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/UCL-300x300.png",
    name: "UEFA Champions League",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/UEFA-supercup-300x300.png",
    name: "UEFA Supercup",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/Europa-League2023-300x300.png",
    name: "Europa League",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/Conference-300x300.png",
    name: "Conference League",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/Roshn-Saudi-League-300x300.png",
    name: "Saudi Pro League",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/F1-300x300.png",
    name: "Formula 1",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/ATP-300x300.png",
    name: "ATP Tour",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/UFC-300x300.png",
    name: "UFC",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/NHL-300x300.png",
    name: "NHL",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/NBA-300x300.png",
    name: "NBA",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/Euroleague-300x300.png",
    name: "Euroleague",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2023/10/UPL-300x300.png",
    name: "Ukrainian Premier League",
    availableCountries: ["ALL"],
  },
  {
    imageUrl:
      "https://setantasports.com/wp-content/uploads/2024/11/SPFL-300x300.png",
    name: "SPFL (Duplicate)",
    availableCountries: ["ALL"],
  },
];
