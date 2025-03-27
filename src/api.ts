
export async function fetchData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}
