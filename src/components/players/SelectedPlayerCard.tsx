function SelectedPlayerCard() {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-base-100 p-4">
      <div>
        <h3 className="font-semibold">Selected Player</h3>

        <p className="text-sm text-base-content/60">All-Rounder</p>
      </div>

      <button className="btn btn-error btn-sm">Remove</button>
    </div>
  );
}

export default SelectedPlayerCard;
