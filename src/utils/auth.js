import Cookie from 'js-cookie'

export const login = (data) => {
    Cookie.set('token', data.token, {expires: 1});
    Cookie.set("user", data.user, { expires: 1 });
}

export const logout = () => {
    Cookie.remove('token')
    Cookie.remove("user");
}

export const isLogin = () => {
    if (Cookie.get('token') && Cookie.get('user'))
        return true
    return false
}