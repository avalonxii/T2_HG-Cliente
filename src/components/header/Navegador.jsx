import React from "react";
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme } from "@nextui-org/react";
import Logo from '../../assets/campusfp.png'

export default function App() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");

  return (
      <Navbar  variant="sticky" >
        <Navbar.Brand>
          <Text b color="inherit" >
            <img src={Logo} alt="" />
          </Text>
        </Navbar.Brand>
        
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="https://campusfp.es/" target="_blank" css={{ background: '$purple', color: 'white' }}>
              Conocenos
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>    
  )
}
