# User Card

[Online Demo](https://shimmering-biscotti-8b73b3.netlify.app/)

A react. js-based User card application which uses [REST API](https://reqres.in/api/users?page=1) to fetch data and display it using CSS-grid. Integrated loading and pagination mechanism using custom build React.js functions.

## Set Up

Enter the following commands in the command prompt to download and run the project in your local device.

- `git clone https://github.com/mansi10101/UserCard`
- `cd UserCard`
- `npm install`
- `npm start`

## Folder Structure

Here is a folder list containing all the important files/folders in this project.

```
UserCard
│
└───public
│   index.html
└───src
│   │   App.js
│   │   App.css
│   └───assets
│   │       loading.svg
│   │       no-data.svg
│   └───Components
│   │       └───Cards
│   │       │     Cards.jsx
│   │       │     index.jsx
│   │       Layout.jsx
│   │       Loading.jsx
│   │       Navbar.jsx
│   │       NoData.jsx
│   └───stylesheets
│   │       Cards.module.css
│   │       Layout.module.css
│   │       Navbar.module.css
│   README.md
│   package.json
│
```

## Functionality

### API calls
The application uses two seperate ways of dealing with API calls. One to handle the call when a user triggers it by clicking on the **Get Users** button, and another when the user wants to toggle between seperate pages of the API data.

1. **'Get Users' Button**
We use a custom async function that utilises javascript's `fetch` method to make an API call. This function is defined in `Layout.jsx` and is passed to the `Navbar.jsx` component via props which is then called whenever the user clicks on the **Get Users** button in the navbar.
```
<!--Function declared in Layout.jsx-->
    const apiCall = () => {
		setRefresh(true);
		fetch(`https://reqres.in/api/users?page=1`)
			.then((res) => res.json())
			.then((json) => {
				setUsers(json);
				setRefresh(false);
				setPage(1);
			});
	};
	
<!--Trigerred on button click-->
    <button className={styles.apiBtn} onClick={() => apiCall()}>
		Get Users
	</button>
```

2. **Pagination**
We make use of React hooks to fullfill our requirement. First we define a state to handle our current page that is to be requested using ``UseState`` and then a ``UseEffect`` to monitor any changes done on the discussed page-state. The ``UseEffect`` hook contains a fetch method to call the api for the current page that the user requires. The page number can be toggled by the users with the help of pagination buttons available at the end of the card grid. The buttons uses updates the current page state using the ``setPage`` call back function passed to it via props.

```
<!--Defining our page state-->
	const [page, setPage] = React.useState(undefined);

<!--Definig the useEffect with page state as a dependencies-->
React.useEffect(() => {
	if (page !== undefined) {
		setRefresh(true);
		fetch(`https://reqres.in/api/users?page=${page}`)
			.then((res) => res.json())
			.then((json) => {
				setUsers(json);
				setRefresh(false);
			});
	}
}, [page]);

<!--Toggling page state-->
<div className={styles.pagination}>
	<button
		className={styles.paginationBtn}
		disabled={page === 1}
		onClick={() => setPage(page - 1)}
	>
		Previous
	</button>
	<button
		className={styles.paginationBtn}
		disabled={page === users.total_pages}
		onClick={() => setPage(page + 1)}
	>
		Next
	</button>
</div>
```

### Loading mechanism

To integrate a loading mechanism in the project we take use of React's ``UseState`` hook to handle a **refresh** state which defines when the API is in process and when it is finished collecting data from the server. Secondly, we make use of nested ternary operator to determine wether to display the loading screen or the user grid or an empty screen prompting to call API. We initialise the state with ``false``, and on start of every API call we change it to ``true`` and as soon as the application is done collecting data from the server we chage the state back to ``false``. This way we can keep track of when and for how long does the API calling process takes place. We display the content screen with respect to this refresh state and our data.
```
<!--Initailising refresh state as false-->
	const [refresh, setRefresh] = React.useState(false);
```
You will notice in the **API calls** section that how we alter the refresh state at the start and at the end of every call.
