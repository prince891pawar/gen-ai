import { RouterProvider } from "react-router-dom"
import { Authprovider } from "./features/auth/services/auth.context.jsx"
import { router } from "./app.routes.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
function App() {
 

  return (
    <Authprovider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
    </Authprovider>
  )
}

export default App