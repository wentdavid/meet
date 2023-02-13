// Import required libraries and modules
import "regenerator-runtime/runtime";
import { mockData } from "./mock-data";
import axios from "axios";
import NProgress from "nprogress";

// Verify the access token using the Google OAuth2 API
export const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};

// Get the list of events from the API
export const getEvents = async () => {
  NProgress.start();

  // Use mock data if the app is running on a local host
  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done();
    return mockData;
  }

  // Return the list of events from local storage if the device is offline
  if (!navigator.onLine) {
    const data = localStorage.getItem("lastEvents");
    NProgress.done();
    return data ? JSON.parse(data).events : [];
  }

  // Get the access token and call the API to fetch the events
  const token = await getAccessToken();
  console.log("Access token: " + token);

  if (token) {
    removeQuery();

    // Use the access token to call the get-events API
    const url =
      "https://pqxjjmrmg7.execute-api.eu-central-1.amazonaws.com/dev/api/get-events" +
      "/" +
      token;
    const result = await axios.get(url);

    // Store the events and locations in local storage
    if (result.data) {
      console.log("Data: " + result.data.events);
      const locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data));
      localStorage.setItem("locations", JSON.stringify(locations));
    }

    NProgress.done();
    return result.data.events;
  }
};

// Extract the locations from the events list
export const extractLocations = (events) => {
  const extractLocations = events.map((event) => event.location);
  const locations = [...new Set(extractLocations)];
  return locations;
};

// Get the access token from local storage or by verifying the code from the OAuth2 provider
export const getAccessToken = async () => {
  const accessToken = localStorage.getItem("access_token");
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    localStorage.removeItem("access_token");

    // Redirect to the OAuth2 provider to get the authorization code
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    if (!code) {
      // Get the URL to redirect the user to the OAuth2 provider
      const results = await axios.get(
        "https://pqxjjmrmg7.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }

    // Get the access token using the authorization code
    return code && getToken(code);
  }

  return accessToken;
};

// Get the access token using the authorization code and store it in local storage
const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    "https://pqxjjmrmg7.execute-api.eu-central-1.amazonaws.com/dev/api/token" +
      "/" +
      encodeCode
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

  access_token && localStorage.setItem("access_token", access_token);

  return access_token;
};

// Remove the authorization code from the URL
const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    const newUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState({ path: newUrl }, "", newUrl);
  } else {
    const newUrl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newUrl);
  }
};