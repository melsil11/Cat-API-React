import React from 'react'

const CatUpdate = ({ cat, handleChange, handleUpdateCat }) => {
	return (
		<>
			<input 
            type='text' 
            value={cat.breed} 
            name='name' 
            onChange={handleChange} 
            />
			<input 
            type='text' 
            value={cat.furType} 
            name='type' 
            onChange={handleChange} 
            />
            <input 
            type='text' 
            value={cat.numberOfToes} 
            name='type' 
            onChange={handleChange} 
            />
			<button onClick={handleUpdateCat}>Update cat</button>
		</>
	)
}

export default CatUpdate