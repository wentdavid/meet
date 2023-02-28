<h1>Meet App</h1>
<p>Meet is a responsive web application that displays upcoming events for developers all around the world. The application fetches the event data from a Google calendar API  and displays the information to the user in a user-friendly way.
This project is built using React, and it demonstrates the use of components, asynchronous programming, APIs, and OAuth2 authentication.</p>
<img width="1426" alt="Bildschirm­foto 2023-02-27 um 18 05 04" src="https://user-images.githubusercontent.com/112701190/221840231-355d439f-30c8-47f2-86b2-1c709a2196a7.png">

<li><a href="https://github.com/wentdavid/meet#features">Features</a></li>
<li><a href="https://github.com/wentdavid/meet#usage">Usage</a></li>
<li><a href="https://github.com/wentdavid/meet#setup">Setup</a></li>
<li><a href="https://github.com/wentdavid/meet#technologies">Technologies</a></li>
<li><a href="https://github.com/wentdavid/meet#user-stories">User Stories</a></li>
<li><a href="https://github.com/wentdavid/meet#components">Components</a></li>
<li><a href="https://github.com/wentdavid/meet#api">API</a></li>
<li><a href="https://github.com/wentdavid/meet#alert">Alert</a></li>
<li><a href="https://github.com/wentdavid/meet#handler">Handler</a></li>
<li><a href="https://github.com/wentdavid/meet#google-oauth2-api">Google OAuth2 API</a></li>
<li><a href="https://github.com/wentdavid/meet#mock-data">Mock Data</a></li>
<li><a href="https://github.com/wentdavid/meet#testing">Testing</a></li>
<li><a href="https://github.com/wentdavid/meet#contributing">Contributing</a></li>
<li><a href="https://github.com/wentdavid/meet#license">License</a></li>

<h2>Features</h2>
<p>The app includes the following features:</p>
<ul>
  <li>Displays a list of upcoming events for developers around the world.</li>
  <img width="1468" alt="Bildschirm­foto 2023-02-27 um 18 06 01" src="https://user-images.githubusercontent.com/112701190/221840054-7ab4bae9-becc-4a06-8df7-b4958986483b.png">
  <li>Users can filter the events by city and number of events displayed.</li>
  <img width="284" alt="Bildschirm­foto 2023-02-27 um 18 06 08" src="https://user-images.githubusercontent.com/112701190/221840282-9cb5ce2a-85a7-4e9c-8f29-03059f12dae7.png">
  <li>Users can click on an event to get more detailed information about it.</li>
  <img width="590" alt="Bildschirm­foto 2023-02-27 um 18 07 33" src="https://user-images.githubusercontent.com/112701190/221840336-04a0065a-acf0-4ddb-b706-1d8197e79f6c.png">
  <li>Users can authenticate with Google OAuth2 to access their Google Calendar.</li>
</ul>
<h2>Usage</h2>
<p>The application is intuitive to use. Upon loading, users are shown a list of upcoming events. They can then click on an event to see more details. Users can also filter events by city and the number of events displayed. Additionally, users can authenticate with their Google accounts to access their Google Calendar.</p>
<p>To use the app, follow these steps:</p>
<ol>
  <li>Open the app in your browser</li>
  <li>If you are not already authorized, click on the "Login" button and follow the instructions to authorize the app with the Meetup API</li>
  <li>Search for events by city using the CitySearch component</li>
  <li>Filter events by the number of events using the NumberOfEvents component</li>
  <li>View a list of events using the EventList component</li>
  <li>View a scatter chart showing the number of events in each city using the EventGenre component</li>
</ol>
<h2>Setup</h2>
<li>Clone the repository.</li>
<li>Install the project dependencies with npm install.</li>
<li>Run the project with npm start.</li>
<h2>Technologies</h2>
<ul>
  <li>React</li>
  <li>React Router</li>
  <li>NProgress</li>
  <li>Googleapis</li>
  <li>Recharts</li>
  <li>AWS Lamda</li>
  <li>serverless</li>
  <li>Jest</li>
  <li>cucmber-jest</li>
  <li>Puppeteer</li>
  <li>Atatus</li>
  <li>etc.</li>
 </ul>
<h2>User Stories</h2>
<h2>FEATURE 1: SHOW/HIDE AN EVENT'S DETAILS</h2>
<p>As a user,
I want to have the capability of showing and hiding an event's details, so that I can view only the details of the events that I am interested in.</p>
<h3>Scenario 1: An event element is collapsed by default</h3>
<ul>Given: an event's info has been loaded</ul>
<ul>When: a user first sees an event</ul>
<ul>Then: the event's details will not be visible</ul>
<h2>Scenario 2: User can expand an event to see its details</h2>
<ul>Given: an event's info has been loaded</ul>
<ul>When: a user clicks a collapsed event panel</ul>
<ul>Then: the details will become visible</ul>
<h2>Scenario 3: User can collapse an event to hide its details</h2>
<ul>Given: an event's details are visible</ul>
<ul>When: a user clicks a "hide" or "collapse" button</ul>
<ul>Then: the event's details will become hidden</ul>
<h1>FEATURE 2: SPECIFY NUMBER OF EVENTS</h1>
<p>As a user,
I want to be able to specify the number of events that are returned on the page, so that I can choose how many events I want to look at and not be overwhelmed with too many events at once.</p>
<h3>Scenario 1: When user hasn’t specified a number, 32 is the default number</h3>
<ul>Given: a user hasn’t specified a number of events to load</ul>
<ul>When: a user open the app or runs a search</ul>
<ul>Then: a maximum of 32 events will appear</ul>
<h3>Scenario 2: User can change the number of events they want to see</h3>
<ul>Given: a user has specified a number of events to load</ul>
<ul>When: a user open the app or runs a search</ul>

<ul>Then: the number of events the user selected will be the maximum number of events shown</ul>
<h2>FEATURE 3: USE THE APP WHEN OFFLINE</h2>
<p>As a user,
I want to be able to use the app even if I am offline, so that I can access the app even if I don't have internet access.</p>
<h3>Scenario 1: Show cached data when there’s no internet connection</h3>
<ul>Given: a user has previously opened the app with an internet connection</ul>
<ul>When: the user opens the app with no internet connection</ul>
<ul>Then: they will see cached data from their last session</ul>
<h3>Scenario 2: Show error when user changes the settings (city, time range)</h3>
<ul>Given: there is no internet connection</ul>
<ul>When: a user tries to change a setting that requires loading new data, like “city” or “time range”</ul>
<ul>Then: they will see an error message indicating that the change isn’t possible without an internet connection</ul>
<h2>FEATURE 4: DATA VISUALIZATION</h2>
<p>As a user,
I want to be able to see a visual representation of event data, so that I can quickly and easily see the number and types of events happening in a certain location.</p>
<h3>Scenario 1: Show a chart with the number of upcoming events in each city</h3>
<ul>Given: there are listed events for a city</ul>
<ul>When: a user searches for events for that city</ul>
<ul>Then: they will see a chart showing the number of upcoming events in that city, categorized by type</ul>
</ul>
<div>
<h2>Components</h2>
<h3>WelcomeScreen</h3>
<p>This component is displayed when the user is not logged in. It provides a button for logging in with a Google account and a link to the privacy policy.</p><img width="1426" alt="Bildschirm­foto 2023-02-27 um 18 05 04" src="https://user-images.githubusercontent.com/112701190/221840547-4303a751-b753-4afb-a2fb-d57a054a6622.png">

<h3>CitySearch</h3>
<p>The CitySearch component allows users to search for events by city. It includes the following features:</p>
<ul>
  <li>Autocomplete suggestions based on the user's input</li>
  <li>An "All Cities" option that shows all events</li>
  <li>An updateEvents callback function that updates the list of events when a city is selected</li>
</ul><img width="284" alt="Bildschirm­foto 2023-02-27 um 18 06 08" src="https://user-images.githubusercontent.com/112701190/221840598-09c80f04-c718-4218-aaa2-600d122f9ce6.png">

<h3>Event</h3>
<p>The Event component displays information about a single event. It includes the following features:</p>
<ul>
  <li>A button that toggles the display of additional event details</li>
  <li>Support for multiple timezones</li>
</ul>
<img width="590" alt="Bildschirm­foto 2023-02-27 um 18 07 33" src="https://user-images.githubusercontent.com/112701190/221840657-cdbab6cc-c459-40d5-b805-1f60bf6a1dc3.png">

<h3>EventGenre</h3>
<p>The EventGenre component displays a pie chart showing the distribution of event genres. It includes the following features:</p>
<ul>
  <li>A legend showing the name and color of each genre</li>
  <li>Support for filtering out genres with no events</li>
</ul>
<img width="1468" alt="Bildschirm­foto 2023-02-27 um 18 06 01" src="https://user-images.githubusercontent.com/112701190/221840691-70b5a47c-3969-4f17-8683-6ff082a7ded8.png">
<h3>EventList</h3>
<p>The EventList component displays a list of events. It includes the following features:</p>
<ul>
  <li>A warning message if the user is offline</li>
  <li>A list of events, each represented by an Event component</li>
</ul>
<h3>NumberOfEvents</h3>
<p>The NumberOfEvents component allows the user to filter the number of events displayed. It includes the following features:</p>
<ul>
  <li>An input field for the user to enter the number of events to display</li>
  <li>An error message if the user enters an invalid number</li>
  <li>The ability to update the number of events using the updateNumberOfEvents prop</li>
</ul>
<img width="268" alt="Bildschirm­foto 2023-02-27 um 18 06 36" src="https://user-images.githubusercontent.com/112701190/221840756-6e7d3674-7907-421b-80a7-f300d52d6d47.png">
</div>
<h2>API</h2>
<p>This code exports several functions that interact with the Meetup API and the Google OAuth2 API to retrieve and verify data, such as the list of events and their locations, and the access token. The functions in this code include:</p>
<ul>
  <li><code>checkToken</code>: This function verifies the access token using the Google OAuth2 API by sending a GET request to the tokeninfo endpoint with the access token as a parameter. It returns a Promise that resolves to the response from the API, which contains information about the token, such as its expiration date.</li>
  <li><code>getEvent</code>s: This function retrieves the list of events from the Meetup API by sending a GET request to an endpoint that requires an access token as a parameter. It first checks if the app is running on a local host, and if it is, it returns mock data. If the device is offline, it returns the events from local storage. If the device is online and has a valid access token, it calls the API and stores the events and their locations in local storage. It returns a Promise that resolves to the list of events.</li>
  <li><code>extractLocations</code>: This function extracts the locations from the list of events by mapping each event to its location and returning a list of unique locations.</li>
  <li><code>getAccessToken</code>: This function retrieves the access token from local storage or by verifying the code from the OAuth2 provider. It first checks if the access token is already stored in local storage and if it is valid. If it is not valid or not present, it removes it from local storage and redirects the user to the OAuth2 provider to get the authorization code. If the authorization code is present, it gets the access token using the code and stores it in local storage. It returns a Promise that resolves to the access token.</li>
  <li><code>getToken</code>: This function retrieves the access token using the authorization code by sending a GET request to an endpoint that requires the code as a parameter. It stores the access token in local storage and returns it.</li>
  <li><code>removeQuery</code>: This function removes the authorization code from the URL by replacing the current URL with a new one that does not contain the code as a parameter.</li>
</ul>
<h2>Alert</h2>
<p>This code defines three different types of alerts as React components: <code>InfoAlert</code>, <code>ErrorAlert</code>, and <code>WarningAlert</code>, all of which extend the base Alert class. Each of these components defines a different color for the text of the alert, with <code>InfoAlert</code> in blue, <code>ErrorAlert</code> in red, and <code>WarningAlert</code> in orange. The Alert class has a <code>getStyle</code> method that returns an object with the color defined by its child classes. The render method returns a div with a paragraph tag containing the alert text, with the text color determined by the <code>getStyle</code> method. These alert components can be imported and used in other components to display different types of alerts to the user.</p>
<div>
<h2>Handler</h2>
<p>The provided code contains a Node.js module with functions that allow the app to access and interact with the Google Calendar API through OAuth 2.0. Here is a brief summary of the functions and variables:</p>
<ul>
<li><code>const SCOPES:</code> An array of Google API scopes that define the access levels to be granted to the app. Currently set to "readonly".</li>
<li><code>const credentials:</code> An object containing the client ID, client secret, calendar ID, and other authentication-related values required to obtain access to the Google Calendar API. These values are typically stored in a configuration file or as environment variables.</li>
<li><code>const { client_secret, client_id, redirect_uris, calendar_id } = credentials:</code> A destructuring assignment that extracts the <code>client_secret</code>, <code>client_id</code>, <code>redirect_uris</code>, and <code>calendar_id</code> properties from the credentials object.</li>
<li><code>const oAuth2Client = new OAuth2(client_id, client_secret, redirect_uris[0]):</code> An instance of the OAuth2 class from the google-auth-library library. This object is used to handle OAuth 2.0 authentication flow with Google.</li>
<li><code>module.exports.getAuthURL:</code> A function that generates and returns a Google OAuth 2.0 authorization URL that users can use to log in to their Google account and authorize the app to access their calendar data. This function is intended to be called when the user clicks the "Log in with Google" button in the app.</li>
<li><code>module.exports.getAccessToken:</code> A function that retrieves an access token for the Google Calendar API by exchanging an authorization code received from the OAuth 2.0 authentication flow for an access token. This function is intended to be called after the user logs in and authorizes the app.</li>
<li><code>module.exports.getCalendarEvents:</code> A function that retrieves a list of upcoming calendar events from the specified Google Calendar by making an authenticated API call to the Google Calendar API. This function is intended to be called after the access token has been obtained.</li>
</ul>
<p>The module uses the <code>googleapis</code> library to make authenticated API calls to the Google Calendar API, and it returns responses in the form of AWS Lambda Proxy Integrations.</p>
<h2>Google OAuth2 API</h2>
<p>The app uses the Google OAuth2 API to authenticate users and access their Google Calendar. The API is used in the <code>getAccessToken</code>, <code>getAuthURL</code>, and <code>getCalendarEvents</code> functions in the <code>api.js</code> file. <code>getAuthURL</code> generates a URL for users to log in to Google and receive an access token. <code>getAccessToken</code> exchanges the authorization code received from Google for an access token. <code>getCalendarEvents</code> retrieves the authenticated user's calendar events from the Google Calendar API.</p>
<h2>Mock Data</h2>
<p>The app includes a <code>mock-data.js</code> file that contains an array of mock events. This is used when the app is running on a local host.</p>
<h2>Testing</h2>
<p>This project includes a suite of end-to-end tests, which can be run with <code>npm run test</code>.</p>
<h2>Contributing</h2>
<p>Contributions are welcome! If you find a bug or want to contribute a new feature, please submit a pull request.</p>
<h2>License</h2>
<p>This project is licensed under the MIT License.</p>
