import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Job from './Job'
import { useSelector, useDispatch } from 'react-redux'
import { getJobsAction } from '../redux/actions/action'

const MainSearch = () => {
  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  const jobs = useSelector((state) => state.job.results)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAction(query))
  }

  return (
    <Container id='font'>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className='my-5' style={{color:"#F5F2E0"}}>Ricerca un lavoro da Remoto</h1>
          <Button className='rounded-pill' onClick={() => navigate('/favourites')} style={{color:"#F5F2E0", backgroundColor:'#162626', border:'0'}}>Favoriti</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              className='rounded-pill'
              placeholder="Cerca un lavoro e fai invio"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch