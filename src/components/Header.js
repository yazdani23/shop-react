import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"
import {Link} from "react-router-dom";
function Header(props){

    return (
        <Navbar bg="dark" variant="dark" className="dark px-4 justify-content-between">
          <Navbar.Brand href="https://yazdani23.github.io//shop-react/home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/check-out">check out</Link>
                <Nav.Link href="https://yazdani23.github.io//shop-react/home">Home</Nav.Link>
                <Nav.Link href="https://yazdani23.github.io//shop-react/login">Login</Nav.Link>
                <Nav.Link href="https://yazdani23.github.io//shop-react/pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline className="d-flex">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button size="lg" variant="outline-info" className="">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Header
