# What is Homadic?
#### [https://homadic.co](https://homadic.co)
When I, [Nick Brooks](https://www.twitter.com/nickbrooks37), began travelling South East Asia as a remote worker, I'd try and scope out a cities rental situation before I hit the ground. This information is readily available - scattered across the internet on sites like Facebook, YouTube and personal blogs. A lot of great people put good time and effort into providing this information. It's a unique rental requirement, somewhere between nightly hotel accommodation and renting for 6-12 months.

There wasn't, however, one central repository for this information. A way to easily document, query, update, filter and compare this data. Something like most travel accommodation sites like AirBNB have...

The aim of Homadic is to make it easier to find great accommodation ahead of time, or even when you've hit the ground in your new city.

### Crowd-sourced
Homadic is also crowd sourced allowing it to be community driven. All data comes from fellow remote workers and travellers who have done it all before you.

Users can sign in, add a new listing or update an existing listing, add photos or reviews with the information they know about places.

### Automated nearby places
Further to this, Homadic itself will poll location services for futher information about what's around a listing. Nearest subway or train station, nearest convenience store, nearest laundry and how long it will take to walk or drive to them. Soon you will be able to filter on these data points.

### Why can't I find a place on Google Maps?
At the moment, to avoid a million different places being loaded in, the Google Maps Nearby Places search only fetches places with the selected keyword or [type attribute](https://developers.google.com/places/supported_types). If you can't find your place here, the best thing to do is add the `lodging` type to a place by suggesting an edit.

![Imgur](https://i.imgur.com/1NgHK7C.jpg)

 [Let me know if you can think of a more comprehensive way to find lodgings](https://github.com/HomadicCo/Homadic.Web/issues/7).

### What's next?
You can find out what we're building next by [browsing the `new feature` label](https://github.com/HomadicCo/Homadic.Web/labels/new%20feature).

# Front End Stack
- **[React](https://github.com/facebook/react)**
- **[React Redux](https://github.com/reduxjs/react-redux)**
- **[React Router](https://github.com/ReactTraining/react-router)**
- **[Webpack](https://github.com/webpack/webpack)**
- **[Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)**
- **[Moment](https://github.com/moment/moment)** - Handle date and time objects.
- **[Axios](https://github.com/axios/axios)** - Http requests.
- **[Marked](https://github.com/markedjs/marked)** - Renders Markdown on the client.
- **[Others](package.json)**

# Server Stack
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
