import React from 'react'

export default props => (
	<button className={'btn btn-'+ props.theme} onClick={props.onClick}>{props.name}</button>
)