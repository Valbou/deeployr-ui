import { getToken, resetToken } from '../store/auth.js'


export function updateAuthHeaders(headers) {
    let token = getToken()

    if (token && token.length > 10) {
        headers['Authorization'] = `Bearer ${token}`
    }

    return headers
}

export function cleanupSession() {
    resetToken()
}
