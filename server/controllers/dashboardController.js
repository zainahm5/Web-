// GET Dashboard
exports.dashboard = async (req, res) => {
    const locals = {
      title: 'Dashboard - SeasonServe',
      description: 'Volunteering Opportunities Website'
    }
    try {
      const user = req.user; // Assuming user is stored in `req.user`
      
      res.render("dashboard", { user });
    } catch (err) {
      console.error("Error loading dashboard:", err);
      res.status(500).send("Error loading dashboard");
    }
  };
  