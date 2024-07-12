import React from 'react'
import { createClient } from 'contentful'
import { useState, useEffect } from 'react'

// Create a Contentful client using the space ID and access token
const client = createClient({
  space: '8b0npix7vwii', // Space ID from Contentful
  environment: 'master', // Defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY, // Access token from environment variables
})

// Custom hook to fetch projects from Contentful
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true) // State to manage loading status
  const [projects, setProjects] = useState([]) // State to store fetched projects

  // Function to fetch data from Contentful
  const getData = async () => {
    try {
      // Fetch entries of content type 'projects' from Contentful
      const response = await client.getEntries({ content_type: 'projects' })
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields // Destructure fields from item
        const id = item.sys.id // Get the system ID of the item
        const img = image?.fields?.file?.url // Get the image URL
        return { title, url, id, img } // Return the project object
      })

      setLoading(false) // Set loading to false after data is fetched
      setProjects(projects) // Set the fetched projects to state
    } catch (e) {
      console.log(e) // Log any errors
      setLoading(false) // Set loading to false in case of error
    }
  }

  // useEffect to fetch data on component mount
  useEffect(() => {
    getData()
  }, [])

  return { loading, projects } // Return loading status and fetched projects
}
