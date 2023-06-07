import React from 'react';

const people = [
    'Mateo Vasquez: Matematicas',
    'Julio Ospina: Ingeniero software',
    'Ana Perez: QA',
    'Felipe Ruiz: Diseñador',
    'Andrea Gonzalez: Desarrollador'
    ];

function RenderArrayList() {
  const listItems = people.map(person =>
    <li>{person}</li>
    )
    return listItems;
}


export default RenderArrayList;