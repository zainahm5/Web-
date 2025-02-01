// GET Dashboard
exports.dashboard = async (req, res) => {
    const locals = {
      title: 'Dashboard - SeasonServe',
      description: 'Volunteering Opportunities Website'
    }
    res.render('dashboard/index', {
      // userName: req.user.firstName,
      locals,
      layout: '../views/layouts/main'
    });
  }