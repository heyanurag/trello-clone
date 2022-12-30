# Taco Trello

Questions & Answers:

Q1: Add/Delete/Edit new stage

I have implemented the functionality to add and delete a new stage.
To add a new stage, we can make a POST request with only the title of the new board. This board will have an empty tasks array and the ID for the same will be generated at the backend.

Eg. request to Add new stage:

```js
axios.post("https://api.trello-clone.app/stage/add", {
  stageName: "New Stage Name",
});
```

The response for the same will be:

```js
{
  "id": "New ID",
  "stage": "New Stage Name",
  "tasks": []
},
```

We can append the above response to the frontend state.

Similarly to edit or delete a request, we will need to make a PATCH or DELETE request respectively:

Eg. Sample Edit stage request:

```js
axios.patch(`https://api.trello-clone.app/stage/edit/${stageToBeEditedID}`, {
  stageName: "Edited Stage Name",
});
```

Eg. Sample Delete stage request:

```js
axios.delete(`https://api.trello-clone.app/stage/delete/${stageToBeDeletedID}`);
```

Q2: Adding comments to tasks:

Previously, we had the tasks JSON Schema for stages as follows:

```js
{
  "id": "1",
  "stage": "Resources",
  "tasks": [
    {
      "id": "1",
      "title": "Financials & Growth Data",
      "description": "Description 1"
    },
  ]
}
```

To support comments, we can introduce a `comments` key for every task object. This `comments` key will be an array containing the details of the comments made by the user and the user details.

New Schema can be as follows:

```js
{
  "id": "1",
  "stage": "Resources",
  "tasks": [
    {
      "id": "1",
      "title": "Financials & Growth Data",
      "description": "Description 1",
      "comments": [
        {
          userID: "1",
          author: "Anurag",
          comment: "Sample comment",
        },
        {
          userID: "2",
          author: "Ansh",
          comment: "Sample comment 1",
        }
      ]
    },
  ]
}
```

Q3: Error Handling:

We can implement an error boundary for unexpected errors as a global wrapper which will catch all the unhandled errors. For other errors, we can use a library such as [react-toastify](https://www.npmjs.com/package/react-toastify) to report errors to the users in the form of notifications.
