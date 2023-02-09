Feature: Filter events by city
    As a user, I want to be able to filter events by city so that I can view events happening in a specific location.

    Scenario: Show upcoming events from all cities when user hasn't searched for a city
        Given the user hasn't searched for any city
        When the user opens the app
        Then the user should see the list of upcoming events from all locations

    Scenario: User sees a list of suggestions when they search for a city
        Given the main page is open
        When user starts typing in the city textbox
        Then the user should receive a list of cities (suggestions) that match what they’ve typed

    Scenario: User can select a city from the suggested list
        Given user was typing “Berlin” in the city textbox
        And the list of suggested cities is showing
        When the user selects a city (e.g., “Berlin, Germany”) from the list
        Then their city should be changed to that city (i.e., “Berlin, Germany”)
        And the user should receive a list of upcoming events in that city
