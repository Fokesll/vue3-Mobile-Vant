export function handleResponse(response) {
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  }