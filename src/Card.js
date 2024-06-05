export function Card({ amt, name }) {
  var tick1, tick2;
  if (amt == 49) {
    tick2 = tick1 = "✔";
  }
  else if (amt == 9) {
    tick1 = "✔";
    tick2 = "✖";
  }
  else if (amt == 0) {
    tick2 = tick1 = "✖";
  }
  return (
    <div className="card col-4-md">
      <div className="text-center">{name}
        <h3 className="box">${amt}/month</h3>
      </div>
      <div>
        ✔ Single User<br />
        ✔ 50GB Storage<br />
        ✔ Unlimited Public Projects<br />
        ✔ Community Access<br />
        {tick1} Unlimited Private Projects<br />
        {tick1} Dedicated Phone Support<br />
        {tick1} Free Subdomain<br />
        {tick2} Monthly Status Reports<br />
      </div>
      <button >BUTTON</button>
    </div>
  );
}
