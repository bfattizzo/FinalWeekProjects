/* eslint-disable react/prop-types */
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BookmarkHeart, BookmarkHeartFill } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import {removeFromFavouriteAction, addToFavouriteAction} from '../redux/actions/action.jsx'

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()

  const isFav = favourites.includes(data.company_name)

  return (
    <Row id='lavori'
      className="mx-0 mt-3 p-3">
      <Col className='d-flex align-items-center'>
        {isFav ? (
          <BookmarkHeartFill id='icona'
            size={25}
            color='#462E14'
            className="me-2"
            onClick={() =>
              dispatch(removeFromFavouriteAction(data.company_name))
            }
          />
        ) : (
          <BookmarkHeart id='icona'
            size={25}
            color='#462E14'
            className="me-2"
            onClick={() => dispatch(addToFavouriteAction(data.company_name))}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col>
        <a href={data.url} target="_blank"rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job