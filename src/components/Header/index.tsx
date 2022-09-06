import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";
import igniteLogo from "../../assets/ignite-logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={igniteLogo}
        alt="Logo usado da página do ignite que é representado por dois triângulos verdes"
      />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
