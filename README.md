## Front End Stack
- **[React](https://github.com/facebook/react)**
- **[React Redux](https://github.com/reduxjs/react-redux)**
- **[React Router](https://github.com/ReactTraining/react-router)**
- **[Webpack](https://github.com/webpack/webpack)**
- **[Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)**
- **[Moment](https://github.com/moment/moment)** - Handle date and time objects.
- **[Axios](https://github.com/axios/axios)** - Http requests.
- **[Marked](https://github.com/markedjs/marked)** - Renders Markdown on the client.
- **[Others](package.json)**

## Server Stack
Homadic is 100% serverless. Using Azure Functions and a combination of CosmosDB and Table Storage for data and file storage means I manage no servers and can focus on faster development!

### [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview)
Azure Functions handle all HTTP requests, queue functions, timer functions and other events.

The goal with all functions is to, as best as possible, only perform one task. If another task needs to be performed, add it to a queue and let another function pick it up from that queue.

**HTTP request functions** perform only the necessary tasks and then provide a response to the user as quickly as possible. Further tasks are sent to a queue in Table Storage which is then picked up by Queue Functions.

**Queue functions** are functions that need to be performed as soon as possible, but not critically. Examples are flushing cache, processing an uploaded image, regenerating listing description etc.

**Timer functions** are functions that need to be performed at a certain interval or a certain time of day such as updating the exchange rates in Table Storage each day.

### [CosmosDB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction)
CosmosDB is a schema-less document store allowing unlimited storage of JSON documents. This allows me to store anything I like, change how the data is structured and run complex queries with fast results. CosmosDB at this stage is used purely to store and query listings.

### [Azure Table Storage](https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-overview)
Azure Table Storage is a key-value store and is used to compliment CosmosDB. It includes information about images, reviews, users and basic data about listings for quick read access as well as some application logging to monitor errors and other circumstances.

It also is used to cache endpoints to 1) increase speed fetching a listing and 2) reduce the load on CosmosDB. When a listing change occurs, it will flush the cache and fetch the listing, a summary of reviews and the images. All listing search queries are cached for 5 minutes too. This is why sometimes an update to a listing isn't immediately reflected.