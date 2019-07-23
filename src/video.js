import { connect } from 'react-redux'
import React from 'react'

 function Video({ activeLesson, activeModule}) {
  return (
    <div>
     <h1>{activeModule.title}</h1>
     <p>{activeLesson.title}</p>
    </div>
  )
}

export default connect(state => ({
  activeModule:state.activeModule,
  activeLesson:state.activeLesson
}))(Video)