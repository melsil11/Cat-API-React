import React from 'react'

const CatUpdate = ({ cat, handleChange, handleUpdateCat }) => {
	return (
		<>
			<input 
            type='text' 
            value={cat.breed} 
            name='breed' 
            onChange={handleChange} 
            />
			<input 
            type='text' 
            value={cat.furType} 
            name='furType' 
            onChange={handleChange} 
            />
            <input 
            type='text' 
            value={cat.averageLifeSpan} 
            name='averageLifeSpan' 
            onChange={handleChange} 
            />
			<button onClick={handleUpdateCat}>Update cat</button>
		</>
	)
}

export default CatUpdate