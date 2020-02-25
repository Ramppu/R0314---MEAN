//VERY IMPORTANT TO GRASP THE IDEA OF THIS FILE!!!!!!

const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  const promise = axios.get("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
                        .then(response =>  {
                          const data = response.data;
                          console.log(data.Search.length);

                          let result = '<table border="1">';
                          result += "<th>Title</th><th>Release Date</th><th>Poster</th>";
                          for (let el in data.Search) {
                            var img = `<img src="${data.Search[el].Poster}"</img>`;
                            result += "<tr><td>" + data.Search[el].Title + "</td><td>" + data.Search[el].Year + "</td><td>"+img+"</tr>";
                          }
                          result += '</table>';

                          res.send(result);
                        });
                        console.log("http://localhost:8081/");
});
//start the server
app.listen(PORT);
