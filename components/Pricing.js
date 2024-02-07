import { trackGoal } from "./helpers/trackGoals";

export default function Pricing({ coupon, discount, price }) {
  function trackForFathom() {
    try {
      trackGoal('hello' + 'there', 'bye')
    } catch (e) {}
  }

  return <div>pricing</div>;
}
