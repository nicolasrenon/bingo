const methods = {
  number: 'GET',
  bingo: 'POST',
}

export default function fetchBingoAPI(endpoint, body) {
  const url = 'http://localhost:9000'
  const options = { method: methods[endpoint] }

  if (body) {
    options.body = JSON.stringify(body)
    options.headers = { 'Content-type': 'application/json' }
  }

  return fetch(`${url}/${endpoint}`, options)
}
