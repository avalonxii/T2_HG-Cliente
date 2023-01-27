import React from "react";
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme } from "@nextui-org/react";


export default function App() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");

  return (
      <Navbar  variant="sticky" >
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            ????''
          </Text>
        </Navbar.Brand>
        
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="#" css={{ background: '$purple', color: 'white' }}>
              Conocenos
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>    
  )
}
