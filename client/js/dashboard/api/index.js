// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

import { 
    ENV ,
    PROD_URL,
    DEV_URL
} from '../../utils/env';

let api = {}
if(ENV === 'Dev'){
    api = {
        getAllDepartments: `${DEV_URL}/departments/`,
        // Snippet #5
        updateEmployee: `${DEV_URL}/departments/employee/update`,
        getDepartment: (name)=>{
            return `${DEV_URL}/departments/name/${name}`
        },
        deleteEmployee: (id)=>{
            return `${DEV_URL}/departments/employee/id/${id}` 
        }
    }
}
if(ENV === 'Prod'){
    api = {
        getAllDepartments: `${PROD_URL}/departments/`,
        updateEmployee: `${PROD_URL}/departments/employee/update`,
        getDepartment: (name)=>{
            return `${PROD_URL}/departments/name/${name}`
        },
        deleteEmployee: (id)=>{
            return `${PROD_URL}/departments/employee/id/${id}` 
        }
    }
    
}
export default api