<?php
// URL API
$uri = 'https://jsonplaceholder.typicode.com/posts';

// Mengambil data dari API
$response = file_get_contents($uri);

// Mengubah data JSON menjadi array asosiatif
$data = json_decode($response, true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Posts (PHP)</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Data Posts dari JSONPlaceholder API (PHP)</h1>
    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($data as $post): ?>
                <tr>
                    <td><?php echo $post['id']; ?></td>
                    <td><?php echo htmlspecialchars($post['title']); ?></td>
                    <td><?php echo htmlspecialchars($post['body']); ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
