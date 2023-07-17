exports.getLogin = (req, res, next) => {
  //const isLoggedIn = req.get('Cookie').split(';')[1].trim().split('=')[1];
  const isLoggedIn = req.get('Cookie').split('=')[1] === 'true';
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: true
  });
};


exports.postLogin = (req, res, next) => {

  req.session.isAuthenticated = true;
    res.redirect('/');
}