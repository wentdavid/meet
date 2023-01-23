<h1>FEATURE 1: SHOW/HIDE AN EVENT'S DETAILS</h1>
<p>As a user,
I want to have the capability of showing and hiding an event's details, so that I can view only the details of the events that I am interested in.</p>
<h2>Scenario 1: An event element is collapsed by default</h2>
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
<h2>Scenario 1: When user hasn’t specified a number, 32 is the default number</h2>
<ul>Given: a user hasn’t specified a number of events to load</ul>
<ul>When: a user open the app or runs a search</ul>
<ul>Then: a maximum of 32 events will appear</ul>
<h2>Scenario 2: User can change the number of events they want to see</h2>
<ul>Given: a user has specified a number of events to load</ul>
<ul>When: a user open the app or runs a search</ul>

<ul>Then: the number of events the user selected will be the maximum number of events shown</ul>
<h1>FEATURE 3: USE THE APP WHEN OFFLINE</h1>
<p>As a user,
I want to be able to use the app even if I am offline, so that I can access the app even if I don't have internet access.</p>
<h2>Scenario 1: Show cached data when there’s no internet connection</h2>
<ul>Given: a user has previously opened the app with an internet connection</ul>
<ul>When: the user opens the app with no internet connection</ul>
<ul>Then: they will see cached data from their last session</ul>
<h2>Scenario 2: Show error when user changes the settings (city, time range)</h2>
<ul>Given: there is no internet connection</ul>
<ul>When: a user tries to change a setting that requires loading new data, like “city” or “time range”</ul>
<ul>Then: they will see an error message indicating that the change isn’t possible without an internet connection</ul>
<h1>FEATURE 4: DATA VISUALIZATION</h1>
<p>As a user,
I want to be able to see a visual representation of event data, so that I can quickly and easily see the number and types of events happening in a certain location.</p>
<h2>Scenario 1: Show a chart with the number of upcoming events in each city</h2>
<ul>Given: there are listed events for a city</ul>
<ul>When: a user searches for events for that city</ul>
<ul>Then: they will see a chart showing the number of upcoming events in that city, categorized by type</ul>
