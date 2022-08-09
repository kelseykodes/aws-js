
// const fs = require('fs');
// const AWS = require('aws-sdk');

// const S3 = new AWS.S3({region: 'us-east-1'})

// const upload = async () => {
//     const fileContent = fs.readFileSync('uploadme.txt');
//     await S3.upload({ Bucket: 'siu-avb-bucket', Key: 'upload-py-stu7.txt', Body: fileContent }).promise()
// }

// upload();

//possible code for download:

const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({region: 'us-east-1'})
const downloadFile = async (filePath, bucketName, key) => {
    const params = {
      Bucket: bucketName,
      Key: key
    };
    const data = await s3.getObject(params).promise();
    fs.writeFileSync(filePath, data.Body.toString());
  };
  
downloadFile('downloadme.txt', 'siu-avb-bucket', 'downloadme_stu7.txt')

// Import required AWS SDK clients and commands for Node.js.
// import { GetObjectCommand } from "@aws-sdk/client-s3";
// import { s3Client } from "./libs/s3Client.js"; // Helper function that creates an Amazon S3 service client module.

// export const bucketParams = {
//   Bucket: "BUCKET_NAME",
//   Key: "KEY",
// };

// export const run = async () => {
//   try {
//     // Create a helper function to convert a ReadableStream to a string.
//     const streamToString = (stream) =>
//       new Promise((resolve, reject) => {
//         const chunks = [];
//         stream.on("data", (chunk) => chunks.push(chunk));
//         stream.on("error", reject);
//         stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
//       });

//     // Get the object} from the Amazon S3 bucket. It is returned as a ReadableStream.
//     const data = await s3Client.send(new GetObjectCommand(bucketParams));
//       return data; // For unit tests.
//     // Convert the ReadableStream to a string.
//     const bodyContents = await streamToString(data.Body);
//     console.log(bodyContents);
//       return bodyContents;
//   } catch (err) {
//     console.log("Error", err);
//   }
// };
// run();

