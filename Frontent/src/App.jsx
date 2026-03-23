import { RouterProvider } from "react-router-dom"
import { Authprovider } from "./features/auth/services/auth.context.jsx"
import { router } from "./app.routes.jsx"
function App() {
 

  return (
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  )
}

export default App
 