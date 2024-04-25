// eslint-disable-next-line no-undef
const config = require('../config');

test('Get URL', async () => {
	let actualStatusCode
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('Get Body', async () => {
	let actualReponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualReponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualReponseBody.name).toBe("For picnic");
});