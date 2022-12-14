import axios from 'axios';

/**
 * Library to handle different functions from server-side database
 * Likely will become more robust as time goes on
 */

export function fetchUsers() {
	return axios.get(`http://localhost:8000/user/`)
        .then(res => {
			// console.log(res.data);
			return res.data.rows;
        })
        .catch(err => {
            console.log(err);
            return false;
        });
}

export function cleanupTests(id) {
	return axios.patch(`http://localhost:8000/test/`, {
			USER_ID: id
		})
		.then(res => {
			console.log("INFO: CLEANUP - Secondary USER_IDs with TEST_ID_ACTIVE != NULL removed");
			return res;
		})
		.catch(err => {
			console.log(err);
			return false;
		});
}

export function fetchTests() {
	return axios.get(`http://localhost:8000/test`).then(res => {
		return res.data.rows;
	})
	.catch(err => {
		console.log(err);
		return false;
	});
}

//TODO Handle same user_id case (shouldnt have duplicates)
export function createUser(id) {
	if(id == "" || id == false) {
		return false;
	}

	return axios.post("http://localhost:8000/user/", {
		user_id: id
	})
	.then(res => {
		console.log(`INFO: CREATED NEW USER - ${id}`);
		return res;
	})
	.catch(err => {
		console.log(err);
		return false;
	});
}

export function activateTest(id, test_id) {
	return axios.post(`http://localhost:8000/test/`, {
		USER_ID: id,
		TEST_ID: test_id
	})
	.then(res => {
		console.log(`INFO: ACTIVATE TEST ${test_id} for user ${id}`);
		return res;
	})
	.catch(err => {
		console.log(err);
		return false;
	});
}

export function sendTestData(data, user_id, test_id) {
	return axios.post(`http://localhost:8000/test_data/`, {
		USER_ID: user_id,
		TEST_ID: test_id,
		TEST_DATA: data
	})
	.then(res => {
		console.log(`INFO: TEST DATA SENT FOR:\n\tTEST:${test_id}\n\tUSER:${user_id}\n\tDATA:${data}`);
		return res;
	})
	.catch(err => {
		console.log(err);
		return false;
	});
}
