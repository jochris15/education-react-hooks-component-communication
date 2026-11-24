# React Hooks + Component Communication

## [React Hooks](https://react.dev/reference/react/hooks)
React Hooks adalah sebuah build-in function dari react yang memungkinkan kita untuk menggunakan beberapa fitur dalam react. 

### [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
1. Hooks hanya bisa dipanggil di level atas (top-level) dari sebuah function component
2. Hooks hanya bisa dipanggil di function component, tidak bisa dipanggil di function biasa.

### [State](https://react.dev/learn/state-a-components-memory)
Apa itu state? State adalah sebuah object yang menyimpan data yang dapat berubah-ubah di dalam sebuah component. Berbeda dengan variabel biasa, state dapat memicu re-render ketika nilainya berubah. State biasanya digunakan untuk menyimpan data yang bersifat dinamis, seperti input dari user, status loading, atau data yang diambil dari API.

### How to create state in React?
Untuk membuat state di React, kita bisa menggunakan hook [useState](https://react.dev/reference/react/useState). Berikut adalah contoh cara membuat state di React:

```js
import { useState } from 'react'

export default function MyComponent() {
    const [stateName, setStateName] = useState(initialState)

    // getter (index 0) = nilai dari state
    // setter (index 1) = adalah function untuk mengubah nilai state. Ketika kita memanggil function ini, React akan melak1ukan re-render pada component dan menampilkan nilai state yang baru.
}
```
## Demo React Hooks
**Part 1 (Login)**
   1. Di part ini kita akan membuat state untuk menyimpan hasil input dari email dan password
   2. Import function yang dibutuhkan untuk mengakses variabel reaktif (state) pada React
   3. Membuat state untuk email dan password dengan menggunakan `useState()`
   4. Tampilkan isi state email & password di dalam html dengan menggunakan curly braces `{}`
   5. Menambahkan event handler `onChange` pada input email dan password
   6. Event handler hanya menerima callback function, jadi kita buat function callback di dalamnya
   7. Setiap ada perubahan di input email dan password, kita akan mengubah value dari state email dan password dengan menggunakan function setter yang sudah dibuat menggunakan `useState()`

**Part 2 (Home)**
   1. Di part ini kita akan menampilkan data dari `product.json` ke dalam bentuk card
   2. Mengambil data dummy untuk Product (ambil dari product.json)
   3. Membuat state untuk penampung data Product
   4. Kita akan melakukan perubahan yang tadinya state product itu valuenya array of object, kita kan rubah menjadi array of "Card" dan ditampilkan ke react
   5. Setiap kita melakukan looping di react, kita harus kasih sebuah prop bernama "key" agar react tau perbedaan antara item yang di looping

## Component Communication

### How to pass data between component?
Cara untuk mengirim data antar component di React adalah dengan menggunakan [Props](https://react.dev/learn/passing-props-to-a-component). Props adalah singkatan dari "properties" dan digunakan untuk mengirim data dari parent component ke child component. Props bersifat read-only, artinya child component tidak dapat mengubah nilai props yang diterimanya.

### How to trigger function in different component?
Sebenarnya sama aja seperti props, tetapi penamaannya berbeda, jika kita passing function lalu di trigger di component lain disebut **Callback Props**

## Demo Component Communication
**Part 1 (Props)**
1. Di part ini kita akan memisahkan bagian card ke dalam component tersendiri, dan akan memanfaatkan props untuk mengirim data dari parent component ke child component
1. Membuat component `Card` yang menerima props dari parent component
2. Mengirim data dari `Home.jsx`(Parent component) ke child component menggunakan props
```js
<Card product={product} key={product.id} />
```
3. Menerima props di dalam component `Card`
```js
export default function Card({ product }) {
    //..
}
```
4. Menampilkan data yang diterima dari props di dalam component `Card`

**Part 2 (Callback Props)**
1. Di part ini kita akan membuat halaman aplikasi kita seperti layaknya aplikasi umum, dimana halamannya akan muncul sesuai dengan menu yang diklik. 
2. Membuat state untuk menyimpan halaman yang sedang aktif 
```js
const [page, setPage] = useState('home')
```
3. Gunakan state `page` untuk membuat [Conditional rendering](https://react.dev/learn/conditional-rendering) di dalam component `App.jsx` agar halaman yang ditampilkan sesuai dengan state `page` yang sedang aktif
4. Karena button navigasi ada di navbar, kita perlu mengirim function `setPage` ke component `Navbar.jsx` agar ketika button diklik, state `page` diubah sesuai dengan button yang diklik. Kita akan memanfaatkan `Callback Props` untuk mengirim function `setPage` ke component `Navbar.jsx`
5. Pasang event handler `onClick` pada button di component `Navbar.jsx` untuk memanggil function `setPage` yang diterima dari props
