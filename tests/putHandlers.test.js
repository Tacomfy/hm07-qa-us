// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {  "productsList": [
    {
      "id": 2,
      "quantity": 5
    }
  ],
  "name": "string"}

test('PutURL', async () => {
    let actualStatusCode
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			
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


test('Put body', async () => {
    let actualReponseBody
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			
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
