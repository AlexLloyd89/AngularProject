# Project

​
Show that you can create an Angular application with the requirements described below
​

## Requirements

​

### Module and Route

​

- Create a component that is lazy loaded and has its own routing file.
- It should have at least one route that goes to another component.
- Make sure there is a default route if an unmatched route is taken.
  ​

### Form

​

- Create a reactive form that takes the following information
  - emailAddress: string; (required) (validate email pattern)
  - isPrimary: boolean; (required)
  - emailTypeId: number; (default = null) // Use a mat-select and show an arbitrary list of options with numbers as the values
  - description: string; (default = '') // Use a textarea
- All form components should use Angular material
- Form should not be submittable if the form is invalid
- On submit make api request to POST described below
  ​

### List

​

- Create a list of elements that displays the information retrieved from the GET call described below
- Sort the list, asc, by `emailAddress`
  ​

### Api Request

​
Use the following base url: `https://130132ee-94fa-4470-ae76-062094b6ec43.mock.pstmn.io/api/`.
You must add the header `x-api-key: 3bad84c8a9e8450ea2e2fe160bc6dab4` or you will be unauthorized.
​

- Endpoints
  - GET `/Members/Email`
  - POST `/Members/Email` (use the values straight from the form describe above as the body)
- API calls need to be made from a global service and return a promise. They must all be wrapped in a `try/catch` from the component
