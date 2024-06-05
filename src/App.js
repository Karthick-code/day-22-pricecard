import logo from './logo.svg';
import './App.css';
import { Card } from './Card';

function App() {
  return (
  <div>
    <div className="text-center">
      <h2 className="title">Price Card</h2>
    </div>

    <div className="row" >
      <Card amt="0" name="free"/>
      <Card amt="9" name="plus"/>
      <Card amt="49" name="pro"/>
    </div>
  </div>

  );
}
// this is sample card component
// function Card1() {
  
//   return (
//     <div className="card col-4-md">
//       <div className="text-center">free
//         <h3 className="box">$0/month</h3>
//       </div>
//       <div>
//         ✔ Single User<br />
//         ✔ 50GB Storage<br />
//         ✔ Unlimited Public Projects<br />
//         ✔ Community Access<br />
//         ✖ Unlimited Private Projects<br />
//         ✖ Dedicated Phone Support<br />
//         ✖ Free Subdomain<br />
//         ✖ Monthly Status Reports<br />
//       </div>
//     </div>
//   )
// }
// function Card2() {
//   return (
//     <div className="card col-4-md">
//       <div className="text-center">plus
//         <h3 className="box">$9/month</h3>
//       </div>
//       <div>
//         ✔ Single User<br />
//         ✔ 50GB Storage<br />
//         ✔ Unlimited Public Projects<br />
//         ✔ Community Access<br />
//         ✔ Unlimited Private Projects<br />
//         ✔ Dedicated Phone Support<br />
//         ✔ Free Subdomain<br />
//         ✖ Monthly Status Reports<br />
//       </div>
//     </div>
//   )
// }
// function Card3() {
//   return (
//     <div className="card col-4-md">
//       <div className="text-center">pro
//         <h3 className="box">$49/month</h3>
//       </div>
//       <div>
//         ✔ Single User<br />
//         ✔ 50GB Storage<br />
//         ✔ Unlimited Public Projects<br />
//         ✔ Community Access<br />
//         ✔ Unlimited Private Projects<br />
//         ✔ Dedicated Phone Support<br />
//         ✔ Free Subdomain<br />
//         ✔ Monthly Status Reports<br />
//       </div>
//     </div>
//   )
// }
export default App;
