import React, { useState, useEffect } from 'react';
import CardUser from '../CardUser/CardUser';
import './CardContainer.css';
import axios from 'axios';

function CardContainer() {
	// State y funcion modificadora del state
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios('https://api.github.com/users').then((res) => setUsers(res.data));

		// fetch('https://api.github.com/users')
		//   .then((response) => response.json())
		//   .then((data) => setUsers(data)); // ASIGNAR AL STATE ORIGINA VACIO, LA DATA QUE RECIBIMOS DE LA PETICION ASYNC
	}, []); // LE PASAMOS UN ARRAY VACIO PARA QUE NO LOOPEE DE FORMA INFINITA

	return (
		<div className='CardContainer'>
			<h1>Users List</h1>
			<CardUser users={users} />
		</div>
	);
}

export default CardContainer;
