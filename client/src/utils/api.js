const api = {
  clientId: '10fbe0ecaa0b7e6b8e0b',
  clientSecret: '6b4bf12d0737c3ace210c0b15e8b59ee66887012',
  count: 5,
  sort: 'created: asc',
}

export const getGithub = (username) =>
  fetch(`https://api.github.com/users/${username}/repos?per_page=${api.count}&sort=${api.sort}&client_id=${api.clientId}&client_secret=${api.clientSecret}`)
   .then(res => res.json())
   .then(data => data)
   .catch(err => console.log(err))
