import { Link, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

import { NavLink } from "./Navlink";
import { NavSection } from "./NavSection";

export function SideBarNav(){
  return(
    <Stack spacing="12" align="flex-start" >
      <NavSection title="Geral">
        <Link display="flex" align="center" >
          <NavLink icon={RiDashboardLine}>
            Dashboard
          </NavLink>
        </Link>

        <Link display="flex" align="center" >
          <NavLink icon={RiContactsLine}>
            Usuários
          </NavLink>
        </Link>
      </NavSection>

      <NavSection title="Automação">
        <NavLink icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>
    </Stack>
  )
}