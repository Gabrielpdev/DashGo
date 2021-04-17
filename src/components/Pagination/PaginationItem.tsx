import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent ?: boolean;
  children: string;
}

export function PaginationItem({children, isCurrent = false}: PaginationItemProps){
  if(isCurrent){
    return(
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorschema="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
      >
        {children}
      </Button>
    );
  }
  return(
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {children}
    </Button>
  )
}