import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title}-Photograpy`;
    },[title])
}
export default useTitle;