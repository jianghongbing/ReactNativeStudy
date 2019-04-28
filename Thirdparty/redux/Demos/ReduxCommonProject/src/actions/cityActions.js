export const ACTION_TYPE_ADD = 'ADD'
export const ACTION_TYPE_DELETE = 'DELETE'
export const ACTION_TYPE_SORTBYTEXT = 'SORTBYTEXT'

let id = 4
export const addCity = (name)=>({
  type: ACTION_TYPE_ADD,
  name,
  id: id++
})

export const deleteCity = (id)=>({
  type: ACTION_TYPE_DELETE,
  id,
})

export const sortCities = ()=>({
  type: ACTION_TYPE_SORTBYTEXT,
})





