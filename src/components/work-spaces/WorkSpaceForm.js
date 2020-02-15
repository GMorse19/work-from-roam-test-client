import React from 'react'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const WorkSpaceForm = ({ workSpace, handleSubmit, handleChange, cancelPath }) => (
  <div className="work_space-board row body">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="place_id">place_id</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="place_id..."
            value={workSpace.place_id}
            name="place_id"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>lat</Form.Label>
          <Form.Control
            required
            placeholder="lat..."
            value={workSpace.lat}
            name="lat"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>lng</Form.Label>
          <Form.Control
            required
            placeholder="lng..."
            value={workSpace.lng}
            name="lng"
            onChange={handleChange}
          />
        </Form.Group>

        <Button style={{ marign: '4px' }} variant="primary" type="submit">Submit</Button>
        <Button style={{ margin: '4px' }} href="#/work_spaces">Cancel</Button>
      </Form>
    </div>
  </div>
)

export default withRouter(WorkSpaceForm)
