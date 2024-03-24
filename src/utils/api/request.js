import { getToken } from '../../store/auth.js'

export async function request(url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) {
    let token = getToken()
    if (token && token.length > 10) {
        headers['Authorization'] = `Bearer ${token}`
    }

    const requestData = {
        method: method,
        headers: headers,
        body: body,
    }

    let result = null
    let error = null

    try {
        const response = await fetch(url, requestData)
        result = await response.json()
        if (!response.ok) {
            throw new Error(`Error ${result.status}: ${result.error}`)
        }
    }
    catch (errorCaught) {
        result = null
        error = errorCaught.message
    }

    return [result, error]
}
