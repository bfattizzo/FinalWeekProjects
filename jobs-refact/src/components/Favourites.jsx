import {
    Container, Row, Col, ListGroup, ListGroupItem, Button,} from 'react-bootstrap'
  import { BookmarkHeartFill } from 'react-bootstrap-icons'
  import { useSelector, useDispatch } from 'react-redux'
  import { Link, useNavigate } from 'react-router-dom'
  import { removeFromFavouriteAction } from '../redux/actions/action.jsx'
  
  const Favourites = () => {
    const favourites = useSelector((state) => state.favourite.list)
    const dispatch = useDispatch()
  
    const navigate = useNavigate()
  
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1 className='my-5' style={{color:"#F5F2E0"}}>Favourites</h1>
            <Button className='rounded-pill' style={{color:"#F5F2E0", backgroundColor:'#162626', border:'0'}} onClick={() => navigate('/')}>Home</Button>
          </Col>
          <Col xs={10} className="mx-auto my-3">
            <ListGroup>
              {favourites.map((fav, i) => (
                <ListGroupItem id="lavori" className='m-2' key={i}>
                  <BookmarkHeartFill id='icona'
                    size={25}
                    color='#462E14'
                    className="me-2"
                    onClick={() => dispatch(removeFromFavouriteAction(fav))}
                  />
                  <Link to={'/' + fav}>{fav}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
  
  export default Favourites