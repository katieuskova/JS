const users = [
  {
    name: 'Алексей',
    login: 'Alex',
    password: '123'
  },
  {
    name: 'Мария',
    login: 'Maria',
    password: '1234'
  },
  {
    name: 'Денис',
    login: 'Denis',
    password: '12345'
  },
  {
    name: 'Дарья',
    login: 'Daria',
    password: '123456'
  }
]

let helloUser = () => {
  let login = prompt('Введите логин');
  let password = prompt('Введите пароль');

  let user = users.find(u => u.login === login && u.password === password);

  if (user) {
    alert(`Добрый день,  ${user.name} !`);
  }
  else {
    alert('Ошибка авторизации, попробуйте еще раз.')
    helloUser()
  }
}

helloUser();