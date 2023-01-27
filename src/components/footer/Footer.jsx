import { Container, Card, Row, Text, Link, Image } from "@nextui-org/react";
import "./footer.css";

export default function Footer() {
  return (
    <Container>
      <Card>
        <Card.Footer>
          <Row justify="center" align="centre">
            <Text h1 
            size={"$md"}
            weight="bold">
              &copyTodos los derecho Rafael, Juan, Bryan
            </Text>
          </Row>
          <Row justify="center" align="centre">
            <Image
            src="https://media.tenor.com/jg0-zHyA_8oAAAAi/winnie-the-pooh-pooh-bear.gif"
            objectFit="none"
          alt="Default Image"
          width={200}
          height={300}>
                
            </Image>
          </Row>
          <Row justify="center" align="centre">
            <Text h1 
            size={"$md"}
            weight="bold">
                <Link href="#">
                Preguntas frecuentes
                </Link>
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
}
