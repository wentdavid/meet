Feature: Show and hide an event's details

    Scenario: An event element is collapsed by default
        Given a collapsed event element containing events is loaded on the page
        When the user opens the app and performs no action
        Then the event element is collapsed by default

    Scenario: User can expand an event to see its details
        Given the event list and event elements have loaded
        When the user clicks on a details button in the event element
        Then the event element expands to show details about the specific event chosen

    Scenario: User can collapse an event to hide its details
        Given the event element is showing the event details
        When the user clicks on the details button again
        Then the event details part of the event element is collapsed