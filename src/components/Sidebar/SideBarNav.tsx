import { Link, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

import { NavLink } from "./Navlink";
import { NavSection } from "./NavSection";

export function SideBarNav(){
  return(
    <Stack spacing="12" align="flex-start" >
      <NavSection title="Geral">
        <Link display="flex" align="center" >
          <NavLink href="/dashboard" icon={RiDashboardLine}>
            Dashboard
          </NavLink>
        </Link>

        <Link display="flex" align="center" >
          <NavLink href="/users" icon={RiContactsLine}>
            Usuários
          </NavLink>
        </Link>
      </NavSection>

      <NavSection title="Automação">
        <NavLink href="/forms" icon={RiDashboardLine}>
          Formulários
        </NavLink>
        <NavLink href="/autmation" icon={RiContactsLine}>
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  )
}