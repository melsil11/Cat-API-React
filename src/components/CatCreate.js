import React, { useState } from 'react' 
import { catCreate } from '../api/cat'
// import { useNavigate} from 'react'
const CatCreate = ({ user, msgAlert }) => {

    const defaultCat = {
        breed: '',
        furType: '',
        numberOfToes: ''
    }

    const [cat, setCat] = useState(defaultCat)
    // const [created, setCreated] = useState
    // const navigate = useNavigate()

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current cat
        // then comma and modify the key to the value you need
        setCat({...cat, [event.target.name]: event.target.value})
    }

    const handleCreateCat = () => {
        catCreate(cat, user)
        .then(() => {
            // setCreated(true)
            msgAlert({
                heading: 'Success',
                message: 'Create Cat',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Cat Failure' + error,
                variant: 'danger'
            })
        })
    }

    // if (created) navigate ('/pets')

    return (
			<>
				<input
					type='text'
					value={cat.breed}
					name='breed'
                    placeholder='Breed of Cat'
					onChange={handleChange}
				></input>
				<input
					type='text'
					value={cat.furType}
					name='furType'
                    placeholder='Type of fur'
					onChange={handleChange}
				></input>
                <input
					type='text'
					value={cat.numberOfToes}
					name='numberOfToes'
                    placeholder='Number of Toes'
					onChange={handleChange}
				></input>
				<button onClick={handleCreateCat}>Create Cat</button>
			</>
		)
}

export default CatCreate