// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

const api = {
    getAllDepartments: 'http://localhost:5000//api/departments/',
    // Snippet #5
    updateEmployee: `http://localhost:5000/api/departments/employee/update`,
    getDepartment: (name)=>{
        return `http://localhost:5000/api/departments/name/${name}`
    },
    deleteEmployee: (id)=>{
        return `http://localhost:5000/api/departments/employee/id/${id}` 
    }
}

// const api = {
//     getAllDepartments: 'https://employee-managers.herokuapp.com/api/departments/',
//     // Snippet #5
//     updateEmployee: `https://employee-managers.herokuapp.com/api/departments/employee/update`,
//     getDepartment: (name)=>{
//         return `https://employee-managers.herokuapp.com/api/departments/name/${name}`
//     },
//     deleteEmployee: (id)=>{
//         return `https://employee-managers.herokuapp.com/api/departments/employee/id/${id}` 
//     }
// }

export default api