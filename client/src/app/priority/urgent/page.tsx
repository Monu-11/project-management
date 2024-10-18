import ReusablePriorityPage from "@/components/Priority/ReusablePriorityPage"
import { Priority } from "@/core/types"

const page = () => {
    return (
      <>
      <ReusablePriorityPage priority={Priority.Urgent} />
      </>
    )
  }
  
  export default page