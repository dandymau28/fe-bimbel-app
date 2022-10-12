const CheckAuth = () => {
    const token = localStorage.getItem('access_token') || '';
    const expiredTime = localStorage.getItem('token_expire') || 0;

    let now = Date.now();

    if (!token) {
        localStorage.setItem('access_token', 'eyJaskdknwansd');
        localStorage.setItem('token_expire', Date.now() + 2000);
        
        return false;
    }
    if (now > expiredTime) {
        console.log('Expire co')
        return false
    };

    return true
}

export default CheckAuth