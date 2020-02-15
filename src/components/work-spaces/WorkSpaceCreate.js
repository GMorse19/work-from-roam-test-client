import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import WorkSpaceForm from './WorkSpaceForm.js'

const WorkSpaceCreate = props => {
  const [workSpace, setWorkSpace] = useState({ place_id: '', lat: '', lng: '' })

  const handleChange = event => {
    event.persist()
    setWorkSpace({ ...workSpace, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    console.log(workSpace)
    event.preventDefault()

    axios({
      url: `${apiUrl}/work_spaces`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { workSpace }
    })
      .then(response => {
        console.log(response)
        props.alert({ heading: 'Success', message: 'You created a work_space', variant: 'success' })
        props.history.push(`work-spaces/${response.data.work_space.id}`)
      })
      .catch(console.error)
  }

  const noNums = function (event) {
    const re = /[A-Za-z_?_ ]+/g
    if (!re.test(event.key)) {
      event.preventDefault()
    }
  }

  return (
    <div className=" body">
      <WorkSpaceForm
        workSpace={workSpace}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        noNums={noNums}
        cancelPath="/"
      />
    </div>
  )
}

export default withRouter(WorkSpaceCreate)
