import React, { useState } from 'react' 
import { catCreate } from '../api/cat'

const CatCreate = ({ user, msgAlert }) => {

    const defaultCat = {
        name: '',
        type: ''
    }

    const [cat, setCat] = useState(defaultCat)

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current cat
        // then comma and modify the key to the value you need
        setCat({...cat, [event.target.name]: event.target.value})
    }

    const handleCreateCat = () => {
        catCreate(cat, user)
        .then(() => {
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

    return (
			<>
				<input
					type='text'
					value={cat.name}
					name='name'
					onChange={handleChange}
				/>
				<input
					type='text'
					value={cat.type}
					name='type'
					onChange={handleChange}
				/>
				<button onClick={handleCreateCat}>Create Cat</button>
			</>
		)
}

export default CatCreate