import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./Navlink";
import { NavSection } from "./NavSection";

export function SideBar(){
  return(
    <Box
      as="aside"
      w="64"
      mr="8"
    >
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
    </Box>    
    
  )
}