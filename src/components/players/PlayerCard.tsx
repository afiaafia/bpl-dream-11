function PlayerCard() {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Shakib Al Hasan</h2>

        <p className="text-sm text-base-content/70">All-Rounder</p>

        <p className="font-semibold">Price: 5,000,000</p>

        <div className="card-actions">
          <button className="btn btn-primary btn-sm">Choose Player</button>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
