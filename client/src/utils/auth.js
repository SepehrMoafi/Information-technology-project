import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // check kardan token
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // gereftan token
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // save kardane token
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  logout() {
    // pak kardane token
    localStorage.removeItem('id_token');
    // reload kardan safe
    window.location.assign('/');
  }
}

export default new AuthService();
