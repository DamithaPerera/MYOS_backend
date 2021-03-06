/**
 * commonResponse
 * @param success
 * @param data
 * @param message
 * @param error
 */
const commonResponse = (success: boolean, data?: any, message = '', error?: any) => ({
    'success': success,
    'data': data,
    'message': message,
    'error': error
});




export {
    commonResponse
}
