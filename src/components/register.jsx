import {Link, NavLink} from "react-router-dom";


 function Register() {


    return (
      <>
        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className='border-b-2 border-white-500  p-2 shadow-md'>
        <NavLink className="flex items-center justify-around " to="/">
        <button className='rounded bg-orange-500 w-32 p-2  '>Retour</button>
        <p className="text-orange-500 font-semibold">CongoCasa</p>
        </NavLink></div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-5">
            <img
              className="mx-auto h-32 w-auto"
              src="https://media.istockphoto.com/id/1407633532/fr/vectoriel/ic%C3%B4ne-oubliez-le-mot-de-passe-protection-du-compte-cl%C3%A9-de-s%C3%A9curit%C3%A9-avertissement-de.jpg?s=612x612&w=0&k=20&c=Zq5GkK7l-1ziZcy8kUGSAfErDQLFGrOW0CqRrgM-SHA="
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              S'inscrire
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email 
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Mot de passe
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="text-sm">
                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Mot de passe oublié?
                  </a>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  S'inscrire
                </button>
              </div>
              <div className="text-center py-2 text-gray-500">
              Déjà membre? <Link className="underline font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to={'/login-form'}>Se connecter</Link>
            </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  export default Register