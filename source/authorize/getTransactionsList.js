
import { MERCHANT_AUTHENTICATION } from './consts'

const URI =
  process.env.NODE_ENV === "production"
    ? "https://api.authorize.net/xml/v1/request.api"
    : "https://apitest.authorize.net/xml/v1/request.api";

const getSorting = options => {
  return {
    orderBy: "submitTimeUTC",
    orderDescending: "true"
  };
};

const getPaging = options => {
  return {
    limit: "100",
    offset: "1"
  };
};

const getBody = options => {
  return JSON.stringify({
    getTransactionListRequest: {
      merchantAuthentication: MERCHANT_AUTHENTICATION,
      batchId: "6680535",
      sorting: getSorting(),
      paging: getPaging()
    }
  });
};

const getTransactionList = async () => {
  const response = await fetch(URI, {
    method: "POST",
    body: getBody()
  });

  const json = await response.json();
  
};

testAuthentication();
getTransactionList();

// fetch("https://apitest.authorize.net/xml/v1/request.api", {
//   credentials: "omit",
//   headers: { "content-type": "application/json", "sec-fetch-mode": "cors" },
//   referrer: "https://developer.authorize.net/api/reference/index.html",
//   referrerPolicy: "no-referrer-when-downgrade",
//   body:
//     '{"getTransactionListRequest": {"merchantAuthentication": {"name": "5NgaN7e3Qz", "transactionKey": "5eeFa886967U4LFM" },   "batchId" : "6680535",\n    "sorting": {\n      "orderBy": "submitTimeUTC",\n      "orderDescending": "true"\n    },\n    "paging": {\n      "limit": "100",\n      "offset": "1"\n    }\n  }\n}',
//   method: "POST",
//   mode: "cors"
// });
