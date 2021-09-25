

# Ödev 1

## Gereksinimler
- [ ] Kök dizinde **"src"** isminde bir dizin oluşturun ve içerisine **"app.js"** adında bir dosya oluşturun.
  
- [ ] **"src"** dizini altına **"lib"** adında başka bir dizin açın ve bu dizinde **"service.js"** adında bir dosya oluşturun.
  - [ ] **"service.js"** dosyası içinde **"getData"** adında bir fonksiyon oluşturun.
    - [ ] Bu fonksiyon **"async"** olarak tanımlanmalı ve default olarak dışa aktarılmalıdır. Fonksiyonun içindeki asenkron fonksiyonlar **"await"** ile tanımlanmalıdır.
    - [ ] Fonksiyon **Number** tipinde tek parametre alır. Bu parametre **user id**'yi belirtir.
    - [ ] Fonksiyonun görevi aşağıdaki endpoint'e giderek parametrede verilen user id ile ilgili kullanıcının verilerini çekmek olmalı. İstekleri **"axios"** kütüphanesini kullanarak yapmanız gerekiyor. İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

		 [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

	- [ ] Yine aynı fonksiyonun içerisinde ve yine aynı user id için bir de "posts" isteği yapılmalıdır.İsteği yaparken aşağıdaki endpoint'in sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

		[https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1)

	- [ ] Artık elimizde kullanıcı bilgileri ve bu kullanıcının post'ları var. Bu iki veriyi birleştirip return edin. Birleştirme sonucunda elinizde aşağıdaki gibi bir obje bulunması gerekiyor.

		```
		{
			id: 1,
			name: "Leanne Graham",
			username: "Bret",
			email: "Sincere@april.biz",
			address: {
				street: "Kulas Light",
				suite: "Apt. 556",
				city: "Gwenborough",
				zipcode: "92998-3874",
				geo: {
					lat: "-37.3159",
					lng: "81.1496"
				}
			},
			phone: "1-770-736-8031 x56442",
			website: "hildegard.org",
			company: {
				name: "Romaguera-Crona",
				catchPhrase: "Multi-layered client-server neural-net",
				bs: "harness real-time e-markets"
			},
			posts: [{
				userId: 1,
				id: 1,
				title: "sunt aut facere repellat",
				body: "quia et suscipit suscipit recusandae"
			}]
		}
		```


- [ ] **"app.js"** dosyasına yazmış olduğunuz **"getData"** isimli fonksiyonu **"import"** edin.
- [ ] Bir alt satırda bu fonksiyonu çalıştırın ve gelen sonucu log'layın.

## ÖDEV1 ÇIKTISI
``` users: {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: { lat: '-37.3159', lng: '81.1496' }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
}
posts: [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\n' +
      'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
      'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
      'qui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\n' +
      'voluptatem occaecati omnis eligendi aut ad\n' +
      'voluptatem doloribus vel accusantium quis pariatur\n' +
      'molestiae porro eius odio et labore et velit aut'
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\n' +
      'sit amet autem assumenda provident rerum culpa\n' +
      'quis hic commodi nesciunt rem tenetur doloremque ipsam iure\n' +
      'quis sunt voluptatem rerum illo velit'
  },
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed\n' +
      'alias aut fugiat sit autem sed est\n' +
      'voluptatem omnis possimus esse voluptatibus quis\n' +
      'est aut tenetur dolor neque'
  },
  {
    userId: 1,
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body: 'ut aspernatur corporis harum nihil quis provident sequi\n' +
      'mollitia nobis aliquid molestiae\n' +
      'perspiciatis et ea nemo ab reprehenderit accusantium quas\n' +
      'voluptate dolores velit et doloremque molestiae'
  },
  {
    userId: 1,
    id: 7,
    title: 'magnam facilis autem',
    body: 'dolore placeat quibusdam ea quo vitae\n' +
      'magni quis enim qui quis quo nemo aut saepe\n' +
      'quidem repellat excepturi ut quia\n' +
      'sunt ut sequi eos ea sed quas'
  },
  {
    userId: 1,
    id: 8,
    title: 'dolorem dolore est ipsam',
    body: 'dignissimos aperiam dolorem qui eum\n' +
      'facilis quibusdam animi sint suscipit qui sint possimus cum\n' +
      'quaerat magni maiores excepturi\n' +
      'ipsam ut commodi dolor voluptatum modi aut vitae'
  },
  {
    userId: 1,
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
    body: 'consectetur animi nesciunt iure dolore\n' +
      'enim quia ad\n' +
      'veniam autem ut quam aut nobis\n' +
      'et est aut quod aut provident voluptas autem voluptas'
  },
  {
    userId: 1,
    id: 10,
    body: 'quo et expedita modi cum officia vel magni\n' +
      'doloribus qui repudiandae\n' +
      'vero nisi sit\n' +
      'quos veniam quod sed accusamus veritatis error'
  }
]


```
