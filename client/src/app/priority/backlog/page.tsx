import ReusablePriorityPage from "@/components/Priority/ReusablePriorityPage"
import { Priority } from "@/core/types"

const page = () => {
    return (
      <>
      <ReusablePriorityPage priority={Priority.Backlog} />
      </>
    )
  }
  
  export default page