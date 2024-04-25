// eslint-disable-next-line no-undef
const config = require('../config');

test('DELETE Request Test: Should return 200 status code for DELETE request to /kits/2:', async () => {
    let actualStatusCode
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
		
		method: 'DELETE',
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});

test('DELETE Request Test: Should have "ok" property set to true in response body for DELETE request to /kits/2:', async () => {
    let actualReponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
		
		method: 'DELETE',
		});
		actualReponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualReponseBody["ok"]).toBe(true);
});
