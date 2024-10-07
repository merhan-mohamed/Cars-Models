
export async function FetchCars({manufacturer, year, fuel, limit, model}){
    const headers = { 
        'x-rapidapi-key':  "fa5d9302b5msh316f633dd1fb958p111bedjsnb5ccf339adf5",
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {headers: headers})
    
    const data = await response.json()

    return data 
}







  







