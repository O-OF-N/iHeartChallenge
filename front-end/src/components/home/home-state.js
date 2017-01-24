export const updateState = (state,artists,search)=> (state && artists &&  typeof search ==='boolean')? Object.assign({},state,{
  artists,search
}):state;


export const updateStateDimensions = (state,window)=> (state && typeof window === 'object')?Object.assign({},state,{
  width: window.innerWidth
}):state;