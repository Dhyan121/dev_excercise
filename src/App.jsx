import "./App.css";
import Card from "./components/Card";
import CardForListing from "./components/CardForListing";

function App() {
  const data = [
    {
      title:
        "Population PK Modeling and Exposure-Response Analyses in Drug Development: Fundamentals, Applications, and Regulatory Guidelines",
      extraDetails: "In Person |  Workshop",
      location: "SF-BAY",
    },
    {
      title:
        "Population PK Modeling and Exposure-Response Analyses in Drug.... ",
      extraDetails: "Web Cast",
      location: "SF-BAY",
    },
    {
      title:
        "Population PK Modeling and Exposure-Response Analyses in Drug.... ",
      extraDetails: "In Person |  Workshop",
      location: "SF-BAY",
    },
    {
      title:
        "Population PK Modeling and Exposure-Response Analyses in Drug.... ",
      extraDetails: "In Person |  Workshop",
      location: "San-Diego",
    },
    {
      title:
        "Population PK Modeling and Exposure-Response Analyses in Drug.... ",
      extraDetails: "In Person |  Workshop",
      location: "SF-BAY",
    },
  ];
  return (
    <>
      <div className="hero">
        <Card />
        <div className="cardListGroup">
          {data.map((item) => (
            <CardForListing
              title={item.title}
              location={item.location}
              extraDetails={item.extraDetails}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
