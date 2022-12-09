import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";

const axiosHandler = require("../components/hooks/AxiosHandler.js");

export default function SpoofAgent() {

	function getUser() {
		const promise = axiosHandler.fetchTests();

		promise.then(res => {
			return res.row[0].USER_ID;
		});
	}

    function sendData(responseData) {
		const data = {
			TEST_DATA: responseData
		};

		const promise = axiosHandler.sendTestData(data, getUser(), this.getTest());
	}

    return (
        <div className="container-fluid p-3">
            <div className="card p-2 text-center">
                <h1 className="card-title">Would you like to return home?</h1>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <button
                                className="btn btn-primary w-25"
                                onClick={sendData("yes")}
                            >
                                Yes
                            </button>
                        </div>
                        <div className="col-6">
                            <button
                                className="btn btn-primary w-25"
                                onClick={sendData("no")}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
