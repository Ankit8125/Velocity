import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR(Incremental Static Regeneration) or tag-based revalidation
})
/*
createClient is called with an object containing the configuration for the Sanity client.
projectId, dataset, and apiVersion are used to specify the Sanity project and dataset to interact with.

useCdn is set to true, which means the client will use Sanity's CDN for fetching data. This is typically faster and more efficient for client-side applications. 
If you are statically generating pages or using Incremental Static Regeneration (ISR), you might set this to false to ensure you get the freshest data.

This setup allows the application to interact with the Sanity backend, fetching and managing content as needed.
*/
