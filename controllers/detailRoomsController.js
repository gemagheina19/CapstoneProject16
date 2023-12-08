// controllers/detailRoomsController.js
const fs = require('fs');
const path = require('path');

const detailRoomsController = {
  getPage: (req, res) => {
    const filePath = path.join(__dirname, '..', 'views', 'detail.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading HTML file:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.send(data);
    });
  },
};

module.exports = detailRoomsController;
