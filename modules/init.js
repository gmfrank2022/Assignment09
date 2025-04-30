async function init() {
	try {
        
		const response = await fetch('../data/employees.json') 
		const employees = await response.json()

        let employees0=[]
		for (let employee of employees) {
            //Use 2D array
            //let employee1 = [employee.id, employee.name, employee.ext, employee.email, employee.title]
            //employees0.push(employee1)

            //Use 1D json array
            employees0.push(employee)

		}
        return employees0
	} catch (error) {
		console.error(error)
	}
}

export default init