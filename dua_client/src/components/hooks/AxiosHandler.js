import axios from 'axios';

/**
 * Library to handle different functions from server-side database
 * Likely will become more robust as time goes on
 */

export function fetchUsers() {
	return axios.get(`http://localhost:8000/user/`)
        .then(res => {
			// console.log(res.data);
			return res.data.row;
        })
        .catch(err => {
            console.log(err);
            return false;
        });
}

export function startTest(participantName, videoPlaying, nextVideoPlaying, destination, pre1, pre2, pre3) {
	return axios.patch(`http://localhost:8000/test/`, {
			ongoing: 1, 
			pauseNow: 1, 
			videoPlaying: videoPlaying, 
			nextVideoPlaying: nextVideoPlaying,
			destination: destination,
			pre1: pre1,
			pre2: pre2,
			pre3: pre3,
			UID: 1
		})
		.then(res => {
			console.log(`INFO: startTest - test started for ${participantName}`);
			return res;
		})
		.catch(err => {
			console.log(err);
			return false;
		});
}

export function endTest(participantName, videoPlaying, nextVideoPlaying ) {
	return axios.patch(`http://localhost:8000/test/`, {
			ongoing: 0, 
			pauseNow: 0, 
			videoPlaying: videoPlaying, 
			nextVideoPlaying: nextVideoPlaying,
			UID: 1
		})
		.then(res => {
			console.log(`INFO: endTest - test ended for ${participantName}`);
			return res;
		})
		.catch(err => {
			console.log(err);
			return false;
		});
}

export function fetchTests() {
	return axios.get(`http://localhost:8000/test`).then(res => {
		return res.data.row;
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




//This was my original approach for passing videoKey data between pages 

export function sendVideoChange(videoKey) {
	return axios.post('http://localhost:8000/video/', {
		NEXT_VIDEO_PLAYING: videoKey
	})
	.then(res => {
		console.log(`INFO: Video change attempted for\n\t NEXT_VIDEO_PLAYING:${videoKey}\n\t`);
		return res; 
	})
	.catch(err => {
		console.log(err);
		return false; 
	});
}

export function fetchVideoChange(UID) {
	return axios.get(`http://localhost:8000/video`).then(res => {
		return res.data.row[0];
	})
	.catch(err => {
		console.log(err);
		return false;
	});
}

export function sendPause(pause) {
	return axios.post('http://localhost:8000/pause/', {
		PAUSE_NOW: pause
	})
	.then(res => {
		console.log(`INFO: Pause change attempted for\n\t PAUSE_NOW:${pause}\n\t`);
		return res; 
	})
	.catch(err => {
		console.log(err);
		return false; 
	});
}

export function getPause() {
	return axios.get(`http://localhost:8000/pause`).then(res => {
		return res.data.row[0];
	})
	.catch(err => {
		console.log(err);
		return false;
	});
}