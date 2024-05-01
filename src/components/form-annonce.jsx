import React from "react";
import { NavLink,Link } from "react-router-dom";

function FormAnnonce() {


    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className='border-b-2 border-white-500  p-2 shadow-md'>
        <NavLink className="flex items-center justify-around " to="/">
        <button className='rounded bg-orange-500 w-32 p-2  '>Retour</button>
        <p className="text-orange-500 font-semibold">CongoCasa</p>
        </NavLink></div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-5">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Ajoute ton annonce gratuitement
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium leading-6 text-gray-900">
                  Nom 
                </label>
                <div className="mt-2">
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    autoComplete="nom"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="lieux" className="block text-sm font-medium leading-6 text-gray-900">
                    Lieux
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="lieux"
                    name="lieux"
                    type="text"
                    autoComplete="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="prix" className="block text-sm font-medium leading-6 text-gray-900">
                    Prix
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="prix"
                    name="prix"
                    type="text"
                    autoComplete="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                    Images
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="image"
                    name="image"
                    type="text"
                    autoComplete="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="choix" className="block text-sm font-medium leading-6 text-gray-900">
                    Voulez-vous:
                  </label>
                </div>
                <div className="mt-2">
                  <select   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   name="choix" id="choix">
                    <option value="">faites un choix</option>
                    <option value="vente">Mettre en vente</option>
                    <option value="location">Faire louer</option>
                  </select>
                </div>
                
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="description" id="description" cols="30" rows="10"></textarea>
                </div>
                
              </div>
  
  
  
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Déposer l'annonce
                </button>
              </div>
              
            </form>
          </div>
        </div>
        </>
    )
    
}

export default FormAnnonce