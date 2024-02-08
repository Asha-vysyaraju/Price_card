import "./App.css";

function App() {
  // List for price cards
  const price_cards = [
    {
      subscription: "FREE",
      price: "$0",
      user: "✔️ Single User",
      storage: "✔️ 50GB Storage",
      publicProjects: "✔️ Unlimited Public Projects",
      access: "✔️ Community Access",
      privateProjects: (
        <span class="fw-lighter">❌ Unlimted Private Projects</span>
      ),
      support: <span class="fw-lighter">❌ Dedicated Phone Support</span>,
      subDomain: <span class="fw-lighter">❌ Free Subdomain</span>,
      reports: <span class="fw-lighter">❌ Monthly Status Reports</span>,
    },

    {
      subscription: "PLUS",
      price: "$9",
      user: "✔️ 5 Users",
      storage: "✔️ 50GB Storage",
      publicProjects: "✔️ Unlimited Public Projects",
      access: "✔️ Community Access",
      privateProjects: "✔️ Unlimted Private Projects",
      support: "✔️ Dedicated Phone Support",
      subDomain: "✔️ Free Subdomain",
      reports: <span class="fw-lighter">❌ Monthly Status Reports</span>,
    },
    {
      subscription: "PRO",
      price: "$49",
      user: "✔️ Unlimited Users",
      storage: "✔️ 50GB Storage",
      publicProjects: "✔️ Unlimited Public Projects",
      access: "✔️ Community Access",
      privateProjects: "✔️ Unlimted Private Projects",
      support: "✔️ Dedicated Phone Support",
      subDomain: "✔️ Free Subdomain",
      reports: "✔️ Monthly Status Reports",
    },
  ];
  return (
    <div className="App bg-primary">
      <div className="container p-5 d-flex justify-content-center align-items-center ">
        {/* mapping price cards to Card component */}
        {price_cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

// Component for price cards where price_card is passed as props
function Card({ card }) {
  return (
    <div className="price_card col-sm-12 col-lg-4">
      <div class="card p-3 m-2" style={{ width: "20rem" }}>
        <h5 class="card-title text-center fw-bolder">{card.subscription}</h5>
        <h3 class="card-header mb-3 text-center">{card.price}/Month</h3>
        <p class="card-text">{card.user}</p>
        <p class="card-text">{card.storage}</p>
        <p class="card-text">{card.publicProjects}</p>
        <p class="card-text">{card.access}</p>
        <p class="card-text">{card.privateProjects}</p>
        <p class="card-text">{card.support}</p>
        <p class="card-text">{card.subDomain}</p>
        <p class="card-text">{card.reports}</p>
        <button class="btn bg-primary bg-gradient">BUTTON</button>
      </div>
    </div>
  );
}

export default App;
