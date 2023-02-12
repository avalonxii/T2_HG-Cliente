import React from "react";
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme } from "@nextui-org/react";
import Logo from '../../assets/campusfp.png'

export default function App() {
  return (
      <Navbar variant="floating" className="navBar">
        <Navbar.Brand>
          <Text b color="inherit" >
            <img src={Logo} alt="" />
          </Text>
        </Navbar.Brand>
        
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="https://campusfp.es/" target="_blank" css={{ background: '$gradient', color: 'white' }}>
              Conócenos
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>    
  )
}
