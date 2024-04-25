// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {  "productsList": [
    {
      "id": 2,
      "quantity": 5
    }
  ],
  "name": "string"}

test('PUT Request Test: Should return 200 status code for PUT request to /kits/3:', async () => {
    let actualStatusCode
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('PUT Request Test: Should have "ok" property set to true in response body for PUT request to /kits/3:', async () => {
    let actualReponseBody
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualReponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualReponseBody["ok"]).toBe(true);
});
