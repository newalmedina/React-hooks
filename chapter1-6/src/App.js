import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Rating from './components/Rating';
import JumbotronComponent from './components/JumbotronComponent';
import UserForm from './components/UserForm';
import { Button, Container } from 'react-bootstrap'



var formatName = (user) => {
  return user.firstName + ' ' + user.lastName
}

function App() {

  const user = {
    firstName: "Newal",
    lastName: "medina",
    image: "https://i.picsum.photos/id/479/200/300.jpg?hmac=24Y_2mfqS4Jh4cf1gOlnYGYBszrnuy3ebrKkszU885k"
  }

  const isValid = true

  return (
    <div >

      <Container>
        <UserForm />
        <hr />
        <JumbotronComponent>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.

        </JumbotronComponent>
        <h1>
          Hello <i>{formatName(user)}</i>
          <br />
          <img src={user.image} alt="" />
        </h1>
        <Products />
        <Button variant='primary' disabled={isValid}> default</Button>
        <hr />
        <Rating rating='1' />
        <Rating rating='2' />
        <Rating rating='3' />
        <Rating rating='4' />
        <Rating rating='5' />
      </Container>
    </div>
  );
}

export default App;
