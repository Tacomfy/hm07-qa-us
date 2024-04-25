// eslint-disable-next-line no-undef
const config = require('../config');

test('GET Request Test: Should return 200 status code for GET request to /kits/1:', async () => {
	let actualStatusCode
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('GET Request Test: Should have correct name property in response body for GET request to /kits/1:', async () => {
	let actualReponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualReponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualReponseBody.name).toBe("For picnic");
});