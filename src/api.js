const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export async function getUsers() {
  const res = await fetch(`${API_URL}/api/users`);
  return res.json();
}

export async function registerUser(data) {
  const res = await fetch(`${API_URL}/api/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}
