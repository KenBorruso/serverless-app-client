const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-vsvn",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zn3wsn1tp3.execute-api.us-east-1.amazonaws.com/prod/",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_2UuF7Wybq",
    APP_CLIENT_ID: "ollfpjjfc9i98gk0ak4np8634",
    IDENTITY_POOL_ID: "us-east-1:76498859-22a5-4805-b4ca-c17b2ba5fbc1 ",
  },
};

export default config;