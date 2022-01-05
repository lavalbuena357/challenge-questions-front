export const petition = async (url, method, headers, body) => {
  const api = await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body)
  })

  return api.json()
}



