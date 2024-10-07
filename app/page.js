
import { Hero, SearchBar, CustomFilter, CarCard, SearchManufacturer, ShowMore  } from "@/components";
import { FetchCars } from "../Utilis/Info.js";
import {fuels, yearsOfProduction} from "../Constants/Data.js";





export default async function Home({searchParams}) {
 

  const allCars = await FetchCars({
      manufacturer: searchParams.manufacturer || "",
      year: searchParams.year || "2022", 
      fuel: searchParams.fuel || "", 
      limit: searchParams.limit || "10", 
      model: searchParams.model || ""})
      console.log(allCars)
     

  const isDataEmpty = allCars.length < 1 || !Array.isArray(allCars) || !allCars
  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl">
            Car Catalogue
          </h1>
          <p> Explore The Car You Might Like</p>
        </div>
        <div className="home__filters"> 
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter  title="Fuel" options={fuels}/>
            <CustomFilter  title="Year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (<section>
          <div className='home__cars-wrapper'>
          {allCars.map((car) => (<CarCard car={car} />))}
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10 }
            isNext= {(searchParams.limit || 10) > allCars.length}/>
          </section>) : 
        ( <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>) }
        </div>  
    </main>

   
  );
}
