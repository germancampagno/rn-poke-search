import { useEffect, useState } from "react"
import ApiClient from "../api/ApiClient"

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    ApiClient.get("/pokemon", {
      params: {
        offset: 0,
        limit: 964
      }
    })
      .then(response => {
        setResults(response.data.results)
        setErrorMessage("")
      })
      .catch(error => {
        console.log(error)
        setErrorMessage("error")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [results, errorMessage, loading]
}
