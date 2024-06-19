import styled from 'styled-components';
import image3 from '../src/assets/2.png';
import image2 from '../src/assets/3.png';
import image1 from '../src/assets/1.png';
import { Website, Header, Navbar, NavLink, Row, Side, Main, Footer } from './styles';
import Form from './components/form';

const App = () => {
  return (
    <Website>
      <div>
        <Header>
          <h1>Sistema Kibbe</h1>
          <p>With a <b>flexible</b> layout.</p>
        </Header>

        <Navbar>
          <NavLink href="https://br.pinterest.com/Mendiie05/theatrical-romance-with-a-ingenue-essence/">RT: Essência Ingênua </NavLink>
          <NavLink href="#">Romântica Teatral</NavLink>
          <NavLink href="#">Kibbe</NavLink>
          <NavLink href="#">Coloração Pessoal</NavLink>
        </Navbar>

        <Row>
          <Side>
            <h2>RT Essência Ingênua</h2>
            <Image src={image2}/>
            <br />
            <Image src={image3} alt="Image description 2" />
            <br />
            <Image src={image2}/>
            
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
           <Button>more</Button>
          </Side>
          <Main>
            <Text>Romântica Teatral com Essência Ingênua</Text>
           
            <br />
            <Image src={image1} alt="Image description" />

            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </Main>
        </Row>

        <Footer>
         By @Mandiegr
        </Footer>

        <Form />
      </div>
    </Website>
  );
};

export default App;

const Text = styled.h2`
  font-family: "Tinos";
  font-size: 60px;
`;

const Image = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  margin: 0 auto; 
`;

const Button = styled.button`
  padding: 10px 50px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  background-color: #8F967F;
  color: #ffffff;

  &:hover {
    background-color:#6b705f;
  }

  &[disabled] {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;
