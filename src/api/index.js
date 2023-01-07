const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
const COHORT_NAME = '2209-FTB-ET-WEB-PT';

export const getPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`)
        const results = await response.json();
        return results;
    } catch (error) {
        console.log('Could not fetch posts', error)

        throw error;
    }
}

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/register`, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            }
        })
    })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('Could not register user', error)

        throw error
    }
}