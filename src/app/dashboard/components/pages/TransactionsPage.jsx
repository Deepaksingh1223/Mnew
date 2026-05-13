"use client";

export default function TransactionsPage({ onGo, onToast }) {
  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="cur">Transactions</span>
      </div>

      <div className="h1">Transactions</div>

      <div className="card">
        <div className="ch">
          <div>
            <div className="ct">Full history</div>
            <div className="cs">Exchanges, withdrawals, purchases</div>
          </div>
          <span className="cl" onClick={() => onToast("Filters applied")}>Filter</span>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="tbl">
            <thead>
              <tr>
                <th style={{ width: 90 }}>Date</th>
                <th style={{ width: 140 }}>Type</th>
                <th style={{ width: 90 }}>Amount</th>
                <th style={{ width: 80 }}>Currency</th>
                <th>Status</th>
                <th style={{ width: 120 }}>Txn ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apr 28</td>
                <td>BTC → USD</td>
                <td className="bo2">$28,493.64</td>
                <td>USD</td>
                <td><span className="pill pd"><i className="ti ti-check" /> Success</span></td>
                <td style={{ fontFamily: "monospace", fontSize: 10, color: "var(--tx3)" }}>MUD-8842A</td>
              </tr>
              <tr>
                <td>Apr 27</td>
                <td>Reward Redeem</td>
                <td className="bo2">500 pts</td>
                <td>POINTS</td>
                <td><span className="pill pd"><i className="ti ti-check" /> Success</span></td>
                <td style={{ fontFamily: "monospace", fontSize: 10, color: "var(--tx3)" }}>MUD-7731B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

