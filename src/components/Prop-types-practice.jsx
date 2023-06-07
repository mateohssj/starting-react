import React from 'react'
import PropTypes from 'prop-types'



function PropTypesPractice(props) {
  return (
    <p>hola {props.name}</p>
  )
}

export default PropTypesPractice


PropTypesPractice.PropTypes = {
    name: PropTypes.string.isRequired
}