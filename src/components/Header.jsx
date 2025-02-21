import chefClaudeLogo from "../images/chef-claude-icon.png";

export default function Header() {
  // Header component
  return (
    <header>
      <img src={chefClaudeLogo} alt="Chef Claude" className="icon" />
      <h1>Chef Claude</h1>
    </header>
  );
}
