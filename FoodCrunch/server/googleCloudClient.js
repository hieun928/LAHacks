const vision = require('@google-cloud/vision');
// Creates a client
const client = new vision.ImageAnnotatorClient({
    keyFilename: __dirname + "/la-hack2018.json"
  });


function getWebEntities(url)
{
    return new Promise((resolve,reject) => {
        client.webDetection(url).then(results => 
            {
                const detection = results[0].webDetection;
                resolve(JSON.stringify(detection.webEntities));
            }
        )
        }
    );
}

module.exports.getWebEntities = getWebEntities;


// Performs label detection on the image file
// console.log(client
//   .webDetection('http://www.harshlight.org/wp-content/uploads/2018/02/HT-Gordon-Ramsay-ml-170516_16x9_992.jpg').then(results => {
//     const detection = results[0].webDetection;
//     console.log(JSON.stringify(detection.webEntities));
//     detection.webEntities.forEach(label => {console.log(label.description)})
//   }))



