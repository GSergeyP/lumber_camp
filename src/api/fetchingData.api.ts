interface IInitialState {
  loading: boolean,
  data: Record<string, any> | null,
  error: boolean
}

const fetchingData = async (baseUrl: string, method: 'GET' | 'POST') => {
  
  const initialState: IInitialState = {
    loading: true,
    data: null,
    error: false,
  }
  
  try {
    const response = await fetch(baseUrl, {
      method: method
    });
      if (response.ok) {
        initialState.data =  await response.json();
      } 
      else throw new Error()
  } 
  catch (err) {
    initialState.error = true;
    initialState.data = null;
  } 
  finally {
    initialState.loading = false
  }
  return initialState 
}

export { fetchingData, type IInitialState }