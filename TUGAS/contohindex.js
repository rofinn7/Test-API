const express = require('express'); 
const axios = require('axios'); 

const app = express(); 
const port = 2000;

// Mengambil data dari API JSONPlaceholder
app.get('/', async (req, res) => {
    try {
        // Mengambil data dari API
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = response.data;

        // Membuat HTML untuk menampilkan data dalam bentuk tabel
        let tableHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Data Posts (Node.js)</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <h1>Data Posts dari JSONPlaceholder API (Node.js)</h1>
            <table border="1" cellpadding="10" cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Iterasi melalui data dan tambahkan setiap post ke tabel
        data.forEach(post => {
            tableHTML += `
            <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            </tr>`;
        });

        // Menutup HTML tabel
        tableHTML += `
                </tbody>
            </table>
        </body>
        </html>`;

        // Mengirimkan HTML sebagai respons
        res.send(tableHTML);
    } catch (error) {
        // Mengirimkan pesan error jika terjadi kesalahan
        res.status(500).send('Error fetching data');
    }
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
