exports.getHomePage = async (req, res) => {
   const locals = {
        title: 'EventServe',
        description: 'Volunteering hub for seasonal events'
    }
    res.render('index', locals);
}
