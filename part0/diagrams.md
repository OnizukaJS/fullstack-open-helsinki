# 0.4 New note diagram

sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    browser->>server: Form data is of type application/x-www-form-urlencoded: note=Test+note
    server->>browser: Response HTTP Status 302

    Note right of browser: The status code is 302 which means the server asked the browser to execute a redirection to the url /notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-01-01" }, ..., { "content": "Test note", "data": "2024-08-23" } ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes with the freshly new created note at the end of the array

# 0.5 Single page app diagram

sequenceDiagram
participant browser
participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "hey", "date": "2024-01-23" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes with the freshly new created note at the end of the array

# 0.6 New note in single page app diagram

sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    browser->>server: Form data is of type application/json: {"content": "Test note SPA", "date": "2024-08-23T13:21:29.172Z"}
    server->>browser: Response HTTP Status 201 Created

    Note right of browser: The status code is 302 which means the server asked the browser to execute a redirection to the url /notes
