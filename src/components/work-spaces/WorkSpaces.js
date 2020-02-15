import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

// import './WorkSpace.scss'

const WorkSpaces = props => {
  const [workSpaces, setWorkSpaces] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/work_spaces`,
      method: 'GET'
    })
      .then(response => {
        setWorkSpaces(response.data.work_spaces)
      })
      .catch(console.error)
  }, [])

  console.log(workSpaces)

  const workSpacesJsx = workSpaces.map(workSpace => (
    <div key={workSpace.id}>
      {<Col lg={8} md={4} sm={4}>
        <Button style={{ backgroundColor: '#fae4ad' }} as={'a'} href={`#/workSpaces/${workSpace.id}`}>
          <div>
            <div>
              <h1 className="title">{workSpace.place_id}</h1>
              <h1 className='subtitle'>Creator: {workSpace.user.email}</h1>
              <h2>{workSpace.note} {workSpace.lat}</h2>
            </div>
          </div>
        </Button>
      </Col>}
    </div>
  ))

  return (
    <Container>
      <Row float="center">
        {workSpacesJsx}
      </Row>
    </Container>
  )
}

export default WorkSpaces
