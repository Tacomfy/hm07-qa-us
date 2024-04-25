// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
		{
		  "id": 5,
		  "quantity": 1
		}
	  ]
}

test('Post Status', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualStatusCode = response.status;
    } catch (error) {
        console.error(error);
    }

    expect(actualStatusCode).toBe(201);
});


test('Post body', async () => {
    let actualReponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualReponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

    expect(actualReponseBody["courierService"]).toBe("Order and Go");
});