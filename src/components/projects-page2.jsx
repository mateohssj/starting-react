import React from "react";

//Componente como funcion flecha
// const ProjectsPage2 = () => {
//     const element = <h1>Esta es una muestra de JSX</h1>
//     return element;
// 

//Mandar atributos como cadena
// const ProjectsPage2 = () => {
//     const element = <h1 className="firstAttribute">¡Hola!</h1>
//     return element;
// }


// //Mandar la atributos como expresion
// const ProjectsPage2 = () => {
//     let varName = 'clase1';
//     const element = <h1 className={varName}>¡saludo!</h1>
//     return element;
// }

//Si se incrustan varios elementos en un HTML deben ir dentro de un elemento mayor como un div
const ProjectsPage2 = () => {
    const element = <div>
                        <h1>¡saludo!</h1>
                        <h2>Articulo</h2>
                        <section>100 años de soledad</section>
                    </div>
    return element;
}

export default ProjectsPage2

