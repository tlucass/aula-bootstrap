import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cartao() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores provident dolorum voluptas, assumenda consequuntur laborum beatae, cum ducimus cupiditate error, explicabo veritatis tempore voluptatem molestiae dolor aliquam. Quasi, blanditiis?
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cartao;